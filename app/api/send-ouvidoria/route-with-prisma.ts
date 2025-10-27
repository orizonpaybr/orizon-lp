import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { uploadToCloudflareR2 } from '@/lib/cloudflare-r2';

const resend = new Resend(process.env.RESEND_API_KEY);

const complaintSchema = z.object({
  nomeCompleto: z.string().min(2, 'Nome completo deve ter pelo menos 2 caracteres'),
  cpf: z.string().min(14, 'CPF deve ter o formato 000.000.000-00'),
  email: z.string().email('Email inválido'),
  telefone: z.string().min(14, 'Telefone deve ter o formato (11) 99999-9999'),
  tipoManifestacao: z.string().min(1, 'Selecione o tipo de manifestação'),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  dataOcorrido: z.string().optional(),
  aceitarLGPD: z.string().transform(val => val === 'true').refine(val => val === true, {
    message: 'Você deve aceitar o uso dos dados conforme LGPD'
  })
});

const complaintTypeLabels: Record<string, string> = {
  'reclamacao': 'Reclamação',
  'sugestao': 'Sugestão',
  'solicitacao': 'Solicitação',
  'denuncia': 'Denúncia'
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extrair dados do formulário
    const formDataObj: Record<string, string> = {};
    const files: File[] = [];
    
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('anexo_')) {
        files.push(value as File);
      } else {
        formDataObj[key] = value as string;
      }
    }
    
    // Validar os dados do formulário
    const validatedData = complaintSchema.parse(formDataObj);
    
    // Gerar número de protocolo
    const protocol = `COMP-${Date.now().toString().slice(-8)}`;
    
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
    });

    // Upload dos arquivos para Cloudflare R2 e salvar caminhos no banco
    const attachmentPromises = files.map(async (file, index) => {
      // Upload real para Cloudflare R2
      const filePath = await uploadToCloudflareR2(file, complaintForm.id, index);
      
      return prisma.attachment.create({
        data: {
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type,
          filePath: filePath,
          complaintId: complaintForm.id,
        },
      });
    });

    const attachments = await Promise.all(attachmentPromises);
    
    // Preparar informações dos anexos
    const attachmentsInfo = attachments.length > 0 
      ? `<h3>Anexos:</h3><ul>${attachments.map(att => `<li>${att.fileName} (${(att.fileSize / 1024 / 1024).toFixed(2)} MB)</li>`).join('')}</ul>`
      : '<p><strong>Anexos:</strong> Nenhum arquivo anexado</p>';

    // Preparar o conteúdo do email
    const emailContent = `
      <h2>Nova Manifestação - Ouvidoria Orizon</h2>
      <p><strong>ID:</strong> ${complaintForm.id}</p>
      <p><strong>Protocolo:</strong> ${protocol}</p>
      <p><strong>Nome Completo:</strong> ${validatedData.nomeCompleto}</p>
      <p><strong>CPF:</strong> ${validatedData.cpf}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Telefone:</strong> ${validatedData.telefone}</p>
      <p><strong>Tipo de Manifestação:</strong> ${complaintTypeLabels[validatedData.tipoManifestacao]}</p>
      <p><strong>Data do Ocorrido:</strong> ${validatedData.dataOcorrido || 'Não informado'}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${validatedData.mensagem}</p>
      ${attachmentsInfo}
      <p><strong>Data de Envio:</strong> ${complaintForm.createdAt.toLocaleString('pt-BR')}</p>
    `;

    // Enviar email para a empresa
    await resend.emails.send({
      from: 'Ouvidoria Orizon <onboarding@resend.dev>',
      to: ['ph23.alves@gmail.com'],
      subject: `Nova Manifestação - Protocolo ${protocol}`,
      html: emailContent,
    });

    // Email de confirmação para o usuário
    const confirmationContent = `
      <h2>Confirmação de Manifestação - Orizon</h2>
      
      <p>Olá ${validatedData.nomeCompleto},</p>
      
      <p>Sua manifestação foi recebida com sucesso!</p>
      
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3>Detalhes da Manifestação:</h3>
        <p><strong>Protocolo:</strong> ${protocol}</p>
        <p><strong>Tipo:</strong> ${complaintTypeLabels[validatedData.tipoManifestacao]}</p>
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
        <strong>Orizon - Prototype Instituição de Pagamento S.A.</strong><br>
        CNPJ: 35.713.491/0001-00<br>
        Autorizada pelo Banco Central do Brasil
      </p>
    `;

    await resend.emails.send({
      from: 'Ouvidoria Orizon <onboarding@resend.dev>',
      to: [validatedData.email],
      subject: `Confirmação de Manifestação - Protocolo ${protocol}`,
      html: confirmationContent,
    });

    return NextResponse.json(
      { 
        message: 'Manifestação enviada com sucesso', 
        protocol,
        complaintFormId: complaintForm.id,
        attachmentsCount: attachments.length
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro na API de ouvidoria:', error);
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Dados do formulário inválidos' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
