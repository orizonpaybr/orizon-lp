# Guia de Deploy na Vercel - Orizon LP

## Problema Resolvido
Este guia documenta a solução para o erro `PrismaClientInitializationError` que ocorria na Vercel quando o Prisma não conseguia localizar o Query Engine.

## Alterações Realizadas

### 1. Schema Prisma (`prisma/schema.prisma`)
✅ Já estava configurado corretamente com:
```prisma
generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "rhel-openssl-3.0.x"]
}
```

### 2. Next.js Config (`next.config.ts`)
Adicionada configuração para externalizar o Prisma e suporte ao Turbopack (Next.js 16+):
```typescript
serverExternalPackages: ['@prisma/client', 'prisma', '@prisma/engines'],
// Configuração vazia do Turbopack (Next.js 16 usa Turbopack por padrão)
turbopack: {},
```

### 3. Package.json Scripts
Atualizados os scripts de build:
```json
{
  "build": "prisma generate && next build",
  "vercel-build": "prisma generate && next build",
  "migrate:deploy": "prisma migrate deploy"
}
```

**Nota:** Removemos `prisma migrate deploy` do build porque o banco de produção já está configurado. As migrations devem ser aplicadas manualmente ou via CI/CD separadamente.

### 4. Lib Prisma (`lib/prisma.ts`)
Adicionado logging para melhor debug:
```typescript
export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
})
```

### 5. Arquivo .vercelignore
Criado para evitar conflitos:
```
node_modules/.prisma
```

## Importante: Baseline do Banco de Dados

Se você já tem um banco de dados em produção com o schema criado, precisa fazer o baseline das migrations:

```bash
# Marcar todas as migrations existentes como aplicadas sem executá-las
npx prisma migrate resolve --applied "0_init"
```

Isso resolve o erro `P3005: The database schema is not empty`.

## Passos para Deploy na Vercel

### 1. Configurar Variáveis de Ambiente
No painel da Vercel, adicione as seguintes variáveis:

```bash
# Database (obrigatório)
DATABASE_URL=postgresql://user:password@host:5432/database

# Resend API Key (obrigatório)
RESEND_API_KEY=your_resend_api_key

# Cloudflare R2 (opcional - para upload de arquivos)
R2_ACCOUNT_ID=your_r2_account_id
R2_ACCESS_KEY_ID=your_r2_access_key_id
R2_SECRET_ACCESS_KEY=your_r2_secret_access_key
R2_BUCKET_NAME=your_r2_bucket_name
R2_PUBLIC_URL=your_r2_public_url
```

### 2. Configurações do Projeto na Vercel

#### Build & Development Settings:
- **Framework Preset:** Next.js
- **Build Command:** `yarn vercel-build` ou deixar o padrão
- **Output Directory:** `.next` (padrão)
- **Install Command:** `yarn install` ou deixar o padrão

#### Node.js Version:
- Certifique-se de que está usando Node.js >= 20.9.0 (já configurado no `package.json`)

### 3. Primeiro Deploy

1. Conecte seu repositório GitHub/GitLab à Vercel
2. Configure as variáveis de ambiente
3. Faça o deploy

A Vercel executará automaticamente:
```bash
yarn install
prisma generate
prisma migrate deploy
next build
```

### 4. Verificar o Deploy

Após o deploy, verifique:
- ✅ O build foi concluído sem erros
- ✅ As migrations foram aplicadas
- ✅ O Prisma Client foi gerado corretamente
- ✅ O formulário de contato está funcionando

## Troubleshooting

### Erro: "Prisma Client could not locate the Query Engine"
**Solução:** Certifique-se de que:
1. O `binaryTargets` inclui `"rhel-openssl-3.0.x"`
2. O `postinstall` script executa `prisma generate`
3. As configurações do webpack estão corretas

### Erro: P3005 - The database schema is not empty
**Solução:** O banco de dados já tem um schema. Faça o baseline:
```bash
# Marcar a migration inicial como aplicada
npx prisma migrate resolve --applied "0_init"
```

### Erro: Database connection
**Solução:** Verifique se:
1. A variável `DATABASE_URL` está configurada corretamente
2. O banco de dados está acessível externamente
3. Se necessário, aplique as migrations manualmente: `npm run migrate:deploy`

### Erro: Build timeout
**Solução:** 
1. Verifique se o banco de dados responde rapidamente
2. Considere usar um plano Vercel com mais recursos
3. Otimize suas migrations

### Erro: Turbopack webpack config warning (Next.js 16+)
**Solução:** 
Adicione uma configuração vazia do Turbopack no `next.config.ts`:
```typescript
turbopack: {},
```
Isso silencia o warning e permite que o build continue. O `serverExternalPackages` já cuida do Prisma.

## Comandos Úteis

### Localmente
```bash
# Gerar Prisma Client
yarn prisma generate

# Aplicar migrations
yarn prisma migrate deploy

# Criar nova migration
yarn prisma migrate dev --name nome_da_migration

# Visualizar banco de dados
yarn prisma studio

# Build local (simula Vercel)
yarn vercel-build
```

### Debug na Vercel
Você pode visualizar os logs de build na Vercel:
1. Vá para o seu projeto
2. Clique em "Deployments"
3. Selecione o deployment
4. Veja os logs em "Building"

## Recursos Adicionais

- [Prisma no Vercel - Documentação Oficial](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel)
- [Next.js + Prisma - Best Practices](https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-monorepo)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

## Notas Importantes

1. **Sempre rode `prisma generate`** após instalar as dependências
2. **Use `prisma migrate deploy`** no ambiente de produção (não `migrate dev`)
3. **Não commite o arquivo `.env`** - use variáveis de ambiente da Vercel
4. **O Prisma Client é gerado durante o build** - não precisa commitar a pasta `node_modules/.prisma`
5. **Mantenha o Prisma atualizado** - versões mais recentes têm melhor suporte à Vercel

## Suporte

Se o problema persistir após seguir este guia:
1. Verifique os logs de build na Vercel
2. Verifique se todas as variáveis de ambiente estão configuradas
3. Tente fazer um novo deploy limpo (Clear Cache & Redeploy)
4. Entre em contato com o suporte da Vercel ou Prisma

---

**Última atualização:** Novembro 2025

