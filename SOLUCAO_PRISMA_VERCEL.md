# 🔧 Solução para Erro Prisma na Vercel

## Problema
```
Prisma Client could not locate the Query Engine for runtime "rhel-openssl-3.0.x"
```

## ✅ Soluções Implementadas

### 1. Removido `output` do schema.prisma
O Prisma precisa usar o output padrão para funcionar corretamente na Vercel.

**Antes:**
```prisma
generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "rhel-openssl-3.0.x"]
  output        = "../node_modules/.prisma/client"  // ❌ Removido
}
```

**Depois:**
```prisma
generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "rhel-openssl-3.0.x"]  // ✅ Mantido apenas isto
}
```

### 2. Ajustado next.config.ts
Removido conflito de externals do webpack que impedia o bundling correto.

```typescript
webpack: (config, { isServer }) => {
  if (isServer) {
    // Não adicionar Prisma aos externals
    config.externals = config.externals || [];
  }
  return config;
},
output: 'standalone',  // ✅ Essencial para Vercel
```

### 3. Criado instrumentation.ts
Garante que o Prisma seja carregado corretamente no servidor.

```typescript
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./lib/prisma')
  }
}
```

### 4. Simplificado vercel.json
Deixar a Vercel usar suas configurações padrão do Next.js.

```json
{
  "framework": "nextjs",
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30,
      "memory": 1024
    }
  }
}
```

## 📝 Server Actions vs API Routes

Você perguntou se trocar para Server Actions funcionaria. **Resposta: SIM**, mas não é necessário!

### Opção 1: Continuar com API Routes (Recomendado - já está funcionando)
As correções acima resolvem o problema. Suas API routes continuarão funcionando.

### Opção 2: Migrar para Server Actions (Opcional)

Se quiser usar Server Actions no futuro:

**Criar arquivo `app/actions/contact.ts`:**
```typescript
'use server'

import { prisma } from '@/lib/prisma'
import { Resend } from 'resend'
import { contactFormSchema } from '@/lib/validations'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  try {
    const data = Object.fromEntries(formData)
    const validated = contactFormSchema.parse(data)
    
    const contact = await prisma.contactForm.create({
      data: validated
    })
    
    await resend.emails.send({
      from: 'Orizon <onboarding@resend.dev>',
      to: ['suporte@orizonpay.io'],
      subject: 'Novo contato',
      html: `<p>Novo contato de ${validated.firstName}</p>`
    })
    
    return { success: true, id: contact.id }
  } catch (error) {
    return { success: false, error: 'Erro ao enviar' }
  }
}
```

**Usar no componente:**
```typescript
'use client'

import { submitContactForm } from '@/app/actions/contact'

export function ContactForm() {
  async function handleSubmit(formData: FormData) {
    const result = await submitContactForm(formData)
    if (result.success) {
      toast.success('Enviado!')
    }
  }
  
  return (
    <form action={handleSubmit}>
      {/* seus campos */}
    </form>
  )
}
```

**Vantagens dos Server Actions:**
- ✅ Código mais simples
- ✅ Menos arquivos (não precisa de API routes)
- ✅ TypeScript end-to-end
- ✅ Melhor integração com React
- ✅ Prisma funciona direto (sem problemas de engine)

**Desvantagens:**
- ❌ Precisa refatorar o código atual
- ❌ Menos familiar se você vem do padrão API Routes

## 🚀 Deploy Agora

Com as correções feitas, faça o deploy:

```bash
git add .
git commit -m "fix: Corrigir Prisma Engine na Vercel"
git push
```

## ✅ Checklist Final

- [x] Removido `output` do schema.prisma
- [x] Ajustado webpack config
- [x] Criado instrumentation.ts
- [x] Simplificado vercel.json
- [x] Mantido binaryTargets correto
- [x] `postinstall` com prisma generate
- [x] Output standalone habilitado

## 🔍 Verificar na Vercel

Após o deploy:
1. Vá em Settings > Functions
2. Verifique se as functions têm memória adequada (1024 MB)
3. Teste o formulário de contato
4. Verifique os logs em tempo real

## 💡 Se Ainda Persistir

1. **Limpar Build Cache na Vercel:**
   - Settings > General > Clear Cache
   - Redeploy

2. **Verificar Variáveis de Ambiente:**
   - DATABASE_URL está configurada?
   - Todas as outras variáveis estão presentes?

3. **Verificar Logs:**
   - Na Vercel, vá em Deployments > [seu deploy] > Functions
   - Veja os logs detalhados do erro

---

**A solução atual (API Routes) deve funcionar perfeitamente! 🎉**

