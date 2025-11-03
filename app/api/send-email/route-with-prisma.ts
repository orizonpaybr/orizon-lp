import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations';
import { prisma } from '@/lib/prisma';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (jsonError) {
      console.error('Erro ao fazer parse do JSON:', jsonError);
      return NextResponse.json(
        { error: 'Formato de dados inválido. Por favor, verifique os dados enviados.' },
        { status: 400 }
      );
    }
    
    // Transformar acceptTerms se vier como string
    if (body.acceptTerms === 'true' || body.acceptTerms === true) {
      body.acceptTerms = true;
    } else if (body.acceptTerms === 'false' || body.acceptTerms === false) {
      body.acceptTerms = false;
    }
    
    // Validar os dados do formulário
    const validatedData = contactFormSchema.parse(body);
    
    // Salvar no banco de dados
    const contactForm = await prisma.contactForm.create({
      data: {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company,
        website: validatedData.website || null,
        volume: validatedData.volume,
        message: validatedData.message,
        acceptTerms: validatedData.acceptTerms,
      },
    });

    // Preparar o conteúdo do email
    const emailContent = `
      <h2>Nova mensagem de contato - Orizon</h2>
      <p><strong>ID:</strong> ${contactForm.id}</p>
      <p><strong>Nome:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Telefone:</strong> ${validatedData.phone}</p>
      <p><strong>Empresa:</strong> ${validatedData.company}</p>
      <p><strong>Site da Empresa:</strong> ${validatedData.website}</p>
      <p><strong>Volume de Transações:</strong> ${getVolumeLabel(validatedData.volume)}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${validatedData.message}</p>
      <p><strong>Data de Envio:</strong> ${contactForm.createdAt.toLocaleString('pt-BR')}</p>
      <hr style="margin: 20px 0;">
      <p style="font-size: 12px; color: #666;">
        <strong>Orizon pay instituição de pagamento Ltda</strong><br>
        CNPJ: 63.095.227/0001-88<br>
        Avenida - PREF OSMAR CUNHA, 416, Centro, Florianópolis, SC, CEP: 88.015-100<br>
        Autorizada pelo BACEN - Banco Central do Brasil
      </p>
    `;

    // Enviar email
    const { data, error } = await resend.emails.send({
      from: 'Orizon <suporte@orizonpay.io>',
      to: ['suporte@orizonpay.io', 'comercial@orizonpay.io'],
      subject: `Nova mensagem de contato - ${validatedData.firstName} ${validatedData.lastName}`,
      html: emailContent,
    });

    if (error) {
      console.error('Erro ao enviar email:', error);
      return NextResponse.json(
        { error: 'Erro ao enviar email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Email enviado com sucesso', 
        data,
        contactFormId: contactForm.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro na API:', error);
    
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

// Função auxiliar para obter o label do volume
function getVolumeLabel(volume: string): string {
  const volumeMap: Record<string, string> = {
    'up-to-10k': 'Até R$10.000 Por mês',
    'up-to-50k': 'R$10.000 - R$50.000 Por mês',
    'up-to-100k': 'R$50.000 - R$100.000 Por mês',
    'up-to-500k': 'R$100.000 - R$500.000 Por mês',
    'up-to-1m': 'R$500.000 - R$1.000.000 Por mês',
    'more-than-1m': 'Mais de R$1.000.000 Por mês',
  };
  
  return volumeMap[volume] || volume;
}
