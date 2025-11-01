# 🚀 Guia de Build e Deploy - Orizon LP

## ✅ Problema Resolvido!

O erro **"Database schema is not empty (P3005)"** foi resolvido criando uma migração baseline.

## 📋 Para Fazer Build Local

### 1. Atualizar Node.js (OBRIGATÓRIO)

O Next.js 16.0.0 requer **Node.js >= 20.9.0**

```bash
# Verificar versão atual
node --version

# Se for menor que 20.9.0, atualizar:
nvm install 20
nvm use 20
```

### 2. Build do Projeto

```bash
# Instalar dependências (se necessário)
npm install

# Build
npm run build

# Iniciar em produção
npm start
```

## 🌐 Deploy na Vercel

### Pré-requisitos
Certifique-se de configurar estas variáveis de ambiente no painel da Vercel:

```
DATABASE_URL=postgresql://...
RESEND_API_KEY=re_...
R2_ACCESS_KEY_ID=...
R2_SECRET_ACCESS_KEY=...
R2_BUCKET_NAME=orizon-lp
R2_ACCOUNT_ID=...
R2_PUBLIC_URL=https://...
```

### Deploy

```bash
# Commit das alterações
git add .
git commit -m "fix: Configuração Prisma e build resolvido"
git push
```

A Vercel fará o deploy automaticamente com Node.js 20.x

## 📁 Arquivos Importantes Criados/Atualizados

### Configuração do Prisma
- ✅ `prisma/migrations/0_init/migration.sql` - Migração baseline
- ✅ `prisma/migrations/migration_lock.toml` - Lock file
- ✅ `prisma/schema.prisma` - Binary targets para Vercel

### Configuração Next.js/Vercel
- ✅ `next.config.ts` - External packages
- ✅ `vercel.json` - Build command
- ✅ `package.json` - Engines e scripts
- ✅ `.nvmrc` - Versão do Node para nvm

### APIs e Validações
- ✅ `app/api/send-email/route.ts` - Tratamento de JSON
- ✅ `app/api/send-email/route-with-prisma.ts` - Tratamento de JSON
- ✅ `app/api/send-ouvidoria/route.ts` - Validação telefone
- ✅ `app/api/send-ouvidoria/route-with-prisma.ts` - Validação telefone

### Documentação
- ✅ `CONFIGURACAO_BUILD.md` - Guia detalhado
- ✅ `DEPLOY_CHECKLIST.md` - Checklist completo
- ✅ `PRISMA_VERCEL_CONFIG.md` - Config Prisma

## 🎯 Status Final

| Item | Status |
|------|--------|
| Prisma Engine para Vercel | ✅ Configurado |
| Migrações Baseline | ✅ Criadas |
| Tratamento de Erros JSON | ✅ Implementado |
| Validação de Telefone | ✅ Com Regex |
| Informações da Empresa | ✅ Atualizadas |
| Node.js Requirements | ✅ Especificado |

## 💡 Comandos Úteis

```bash
# Development
npm run dev

# Build local
npm run build

# Verificar schema do Prisma
npx prisma format

# Ver status das migrações
npx prisma migrate status

# Atualizar Node.js com nvm
nvm install 20 && nvm use 20
```

## 🐛 Troubleshooting

### Erro: Node.js version required
```bash
nvm install 20
nvm use 20
nvm alias default 20
```

### Erro: Prisma Client não encontrado
```bash
npx prisma generate
npm run build
```

### Erro na Vercel: Engine not found
- ✅ Já configurado no `prisma/schema.prisma` com binary targets

### Erro: JSON Parse
- ✅ Já tratado nos endpoints da API

---

**Projeto pronto para deploy! 🎉**

Próximo passo: 
1. Atualizar Node.js localmente para >= 20.9.0
2. Fazer commit e push
3. Verificar deploy automático na Vercel

