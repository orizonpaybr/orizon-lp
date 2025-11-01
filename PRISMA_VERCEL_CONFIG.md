# Configuração do Prisma para Vercel

## Mudanças Realizadas

### 1. Schema do Prisma (`prisma/schema.prisma`)
```prisma
generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "rhel-openssl-3.0.x"]
  output        = "../node_modules/.prisma/client"
}
```

- **binaryTargets**: Incluído `rhel-openssl-3.0.x` para compatibilidade com AWS Lambda (Vercel)
- **output**: Especificado caminho explícito para o cliente gerado

### 2. Next.js Config (`next.config.ts`)
```typescript
serverExternalPackages: ['@prisma/client', '@prisma/engines'],
experimental: {
  serverComponentsExternalPackages: ['@prisma/client', '@prisma/engines'],
},
webpack: (config, { isServer }) => {
  if (isServer) {
    config.externals.push('@prisma/client', '@prisma/engines');
  }
  return config;
}
```

### 3. Package.json
- Adicionado `vercel-build` script
- Incluído `prisma migrate deploy` no build

### 4. Vercel.json
```json
{
  "buildCommand": "prisma generate && prisma migrate deploy && next build",
  "env": {
    "PRISMA_GENERATE_SKIP_AUTOINSTALL": "false"
  }
}
```

## Variáveis de Ambiente Necessárias na Vercel

Configure estas variáveis no painel da Vercel:

1. **DATABASE_URL**: String de conexão do PostgreSQL (Neon)
   ```
   postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require
   ```

2. **RESEND_API_KEY**: Chave da API do Resend

3. **R2_ACCESS_KEY_ID**: Cloudflare R2 Access Key

4. **R2_SECRET_ACCESS_KEY**: Cloudflare R2 Secret Key

5. **R2_BUCKET_NAME**: Nome do bucket R2

6. **R2_ACCOUNT_ID**: Account ID do Cloudflare

7. **R2_PUBLIC_URL**: URL pública do R2

## Troubleshooting

### Erro: "Query Engine not found"
- Verifique se `DATABASE_URL` está configurada
- Certifique-se de que `prisma generate` foi executado no build
- Verifique os logs de build na Vercel

### Erro: "Cannot find module @prisma/client"
- Limpe o cache de build na Vercel
- Faça um novo deploy

### Erros de JSON Parse
- Verifique se os dados enviados estão no formato correto
- Use o tratamento de erro melhorado nos endpoints da API

## Comandos Úteis

```bash
# Gerar Prisma Client localmente
npx prisma generate

# Aplicar migrações
npx prisma migrate deploy

# Build completo (como na Vercel)
npm run vercel-build
```

