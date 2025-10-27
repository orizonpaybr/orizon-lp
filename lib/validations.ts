import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  lastName: z.string().min(2, 'Sobrenome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string()
    .min(14, 'Telefone deve ter o formato (11) 99999-9999')
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Telefone deve ter o formato (11) 99999-9999'),
  company: z.string().min(2, 'Nome da empresa deve ter pelo menos 2 caracteres'),
  website: z.string().url('URL inválida').or(z.literal('')),
  volume: z.string().min(1, 'Selecione uma opção'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: 'Você deve aceitar os termos de uso'
  })
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;


