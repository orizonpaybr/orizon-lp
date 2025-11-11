'use server'

import { prisma } from '@/lib/prisma'
import { Resend } from 'resend'
import { uploadToCloudflareR2 } from '@/lib/cloudflare-r2'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const complaintSchema = z.object({
  nomeCompleto: z.string().min(2, 'Nome completo deve ter pelo menos 2 caracteres'),
  cpf: z.string().min(14, 'CPF deve ter o formato 000.000.000-00'),
  email: z.string().email('Email inválido'),
  telefone: z.string()
    .min(14, 'Telefone deve ter o formato (11) 99999-9999')
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Telefone deve ter o formato (11) 99999-9999'),
  tipoManifestacao: z.string().min(1, 'Selecione o tipo de manifestação'),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  dataOcorrido: z.string().optional(),
  aceitarLGPD: z.boolean().refine(val => val === true, {
    message: 'Você deve aceitar o uso dos dados conforme LGPD'
  })
})

const complaintTypeLabels: Record<string, string> = {
  'reclamacao': 'Reclamação',
  'sugestao': 'Sugestão',
  'elogio': 'Elogio',
  'solicitacao': 'Solicitação',
  'denuncia': 'Denúncia'
}

export async function submitComplaint(formData: FormData) {
  try {
    // Extrair dados do formulário
    const data = {
      nomeCompleto: formData.get('nomeCompleto') as string,
      cpf: formData.get('cpf') as string,
      email: formData.get('email') as string,
      telefone: formData.get('telefone') as string,
      tipoManifestacao: formData.get('tipoManifestacao') as string,
      mensagem: formData.get('mensagem') as string,
      dataOcorrido: formData.get('dataOcorrido') as string || undefined,
      aceitarLGPD: formData.get('aceitarLGPD') === 'true',
    }
    
    // Extrair arquivos
    const files: File[] = []
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('anexo_') && value instanceof File) {
        files.push(value)
      }
    }
    
    // Validar os dados
    const validatedData = complaintSchema.parse(data)
    
    // Gerar número de protocolo
    const protocol = `COMP-${Date.now().toString().slice(-8)}`
    
    // Salvar no banco de dados
    const complaintForm = await prisma.complaintForm.create({
      data: {
        fullName: validatedData.nomeCompleto,
        cpf: validatedData.cpf,
        email: validatedData.email,
        phone: validatedData.telefone,
        complaintType: validatedData.tipoManifestacao,
        message: validatedData.mensagem,
        incidentDate: validatedData.dataOcorrido || null,
        acceptLGPD: validatedData.aceitarLGPD,
        protocol: protocol,
        status: 'pending',
      },
    })

    // Upload dos arquivos para Cloudflare R2
    const attachmentPromises = files.map(async (file, index) => {
      const filePath = await uploadToCloudflareR2(file, complaintForm.id, index)
      
      return prisma.attachment.create({
        data: {
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type,
          filePath: filePath,
          complaintId: complaintForm.id,
        },
      })
    })

    const attachments = await Promise.all(attachmentPromises)
    
    // Preparar informações dos anexos
    const attachmentsInfo = attachments.length > 0 
      ? `<h3>Anexos:</h3><ul>${attachments.map((att) => `<li>${att.fileName} (${(att.fileSize / 1024 / 1024).toFixed(2)} MB)</li>`).join('')}</ul>`
      : '<p><strong>Anexos:</strong> Nenhum arquivo anexado</p>'

    // Preparar o conteúdo do email para a empresa
    const emailContent = `
      <h2>Nova Manifestação - Ouvidoria Orizon</h2>
      <p><strong>ID:</strong> ${complaintForm.id}</p>
      <p><strong>Protocolo:</strong> ${protocol}</p>
      <p><strong>Nome Completo:</strong> ${validatedData.nomeCompleto}</p>
      <p><strong>CPF:</strong> ${validatedData.cpf}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Telefone:</strong> ${validatedData.telefone}</p>
      <p><strong>Tipo de Manifestação:</strong> ${complaintTypeLabels[validatedData.tipoManifestacao] || validatedData.tipoManifestacao}</p>
      <p><strong>Data do Ocorrido:</strong> ${validatedData.dataOcorrido || 'Não informado'}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${validatedData.mensagem}</p>
      ${attachmentsInfo}
      <p><strong>Data de Envio:</strong> ${complaintForm.createdAt.toLocaleString('pt-BR')}</p>
    `

    // Preparar anexos para o email
    const emailAttachments = await Promise.all(
      files.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer())
        return {
          filename: file.name,
          content: buffer,
        }
      })
    )

    // Enviar email para a empresa
    console.log('📧 Tentando enviar email via Resend (empresa)...')
    console.log('RESEND_API_KEY configurada:', !!process.env.RESEND_API_KEY)
    
    const emailResult = await resend.emails.send({
      from: 'Ouvidoria Orizon <suporte@orizonpay.io>',
      to: ['navjot8185@godaddy.com'],
      // to: ['sac@orizonpay.io'],
      // to: ['ph23.alves@gmail.com'],
      subject: `Nova Manifestação - Protocolo ${protocol}`,
      html: emailContent,
      attachments: emailAttachments,
    })

    console.log('📧 Resultado do envio de email (empresa):', emailResult)

    if (emailResult.error) {
      console.error('❌ Erro do Resend (empresa):', emailResult.error)
      throw new Error(`Erro ao enviar email: ${emailResult.error.message}`)
    }

    console.log('✅ Email para empresa enviado! ID:', emailResult.data?.id)

    // Email de confirmação para o usuário
    const confirmationContent = `
      <h2>Confirmação de Manifestação - Orizon</h2>
      
      <p>Olá ${validatedData.nomeCompleto},</p>
      
      <p>Sua manifestação foi recebida com sucesso!</p>
      
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3>Detalhes da Manifestação:</h3>
        <p><strong>Protocolo:</strong> ${protocol}</p>
        <p><strong>Tipo:</strong> ${complaintTypeLabels[validatedData.tipoManifestacao] || validatedData.tipoManifestacao}</p>
        <p><strong>Data de Envio:</strong> ${complaintForm.createdAt.toLocaleString('pt-BR')}</p>
      </div>
      
      <h3>Próximos Passos:</h3>
      <ul>
        <li>Analisaremos sua manifestação em até 5 dias úteis</li>
        <li>Você receberá atualizações por email</li>
        <li>Use o protocolo <strong>${protocol}</strong> para acompanhar o andamento</li>
      </ul>
      
      <p>Se precisar de informações adicionais, entre em contato conosco.</p>
      
      <hr style="margin: 20px 0;">
      <p style="font-size: 12px; color: #666;">
        <strong>Orizon pay instituição de pagamento Ltda</strong><br>
        CNPJ: 63.095.227/0001-88<br>
        Avenida - PREF OSMAR CUNHA, 416, Centro, Florianópolis, SC, CEP: 88.015-100<br>
        Autorizada pelo BACEN - Banco Central do Brasil
      </p>
    `

    console.log('📧 Tentando enviar email de confirmação para usuário...')
    
    const confirmationResult = await resend.emails.send({
      from: 'Ouvidoria Orizon <suporte@orizonpay.io>',
      to: [validatedData.email],
      subject: `Confirmação de Manifestação - Protocolo ${protocol}`,
      html: confirmationContent,
    })

    console.log('📧 Resultado do envio de confirmação:', confirmationResult)

    if (confirmationResult.error) {
      console.error('❌ Erro do Resend (confirmação):', confirmationResult.error)
      // Não falha se o email de confirmação falhar, mas loga o erro
    } else {
      console.log('✅ Email de confirmação enviado! ID:', confirmationResult.data?.id)
    }

    return { 
      success: true,
      message: 'Manifestação enviada com sucesso', 
      protocol,
      complaintFormId: complaintForm.id,
      attachmentsCount: attachments.length
    }

  } catch (error) {
    console.error('Erro ao enviar manifestação:', error)
    
    if (error instanceof z.ZodError) {
      return { 
        success: false,
        error: 'Dados do formulário inválidos' 
      }
    }

    return { 
      success: false,
      error: 'Erro ao enviar manifestação. Tente novamente.' 
    }
  }
}

