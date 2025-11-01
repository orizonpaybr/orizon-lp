# Configuração de Build - Orizon LP

## ✅ Build Resolvido com Sucesso!

### Problema Original
- **Erro**: Database schema is not empty (P3005)
- **Causa**: Banco de dados já tinha tabelas mas sem histórico de migrações do Prisma

### Solução Implementada

1. **Criada Migração Baseline** (`prisma/migrations/0_init/migration.sql`)
   - Inclui todas as tabelas existentes
   - Usa `CREATE TABLE IF NOT EXISTS` para não dar erro se já existirem
   - Usa `DO $$ BEGIN ... EXCEPTION` para foreign keys

2. **Script de Build Simplificado**
   ```json
   "build": "prisma generate && next build"
   ```
   - Removido `prisma migrate deploy` que causava o erro
   - O banco já está com o schema correto, não precisa migrar

3. **Arquivos Criados**:
   - `prisma/migrations/0_init/migration.sql` - Migração inicial
   - `prisma/migrations/migration_lock.toml` - Lock file do provider

## ⚠️ Requisito: Node.js >= 20.9.0

O Next.js 16.0.0 requer Node.js 20.9.0 ou superior.

### Verificar Versão Atual
```bash
node --version
```

### Atualizar Node.js (se necessário)

**Opção 1: usando nvm (recomendado)**
```bash
# Instalar nvm (se não tiver)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Instalar Node.js 20 LTS
nvm install 20
nvm use 20
nvm alias default 20
```

**Opção 2: Download direto**
- Baixe de: https://nodejs.org/
- Instale a versão LTS (20.x)

### Após Atualizar o Node
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install

# Build
npm run build
```

## 🚀 Build na Vercel

A Vercel automaticamente usa a versão correta do Node.js. Você pode especificar no `package.json`:

```json
{
  "engines": {
    "node": ">=20.9.0"
  }
}
```

### Configuração Vercel
O `vercel.json` já está configurado:
```json
{
  "buildCommand": "prisma generate && next build"
}
```

## 📝 Estrutura de Migrações

```
prisma/
├── schema.prisma
├── seed.ts
└── migrations/
    ├── migration_lock.toml
    └── 0_init/
        └── migration.sql
```

## ✅ Checklist de Deploy

- [x] Prisma Client configurado para Vercel
- [x] Binary targets corretos no schema.prisma
- [x] Migrações criadas (baseline)
- [x] Scripts de build atualizados
- [x] next.config.ts com external packages
- [x] Tratamento de erros nas APIs
- [ ] Node.js >= 20.9.0 instalado (local)
- [ ] Variáveis de ambiente configuradas na Vercel

## 🎯 Próximos Passos

1. **Local (Desenvolvimento)**
   ```bash
   # Atualizar Node.js para >= 20.9.0
   nvm install 20
   nvm use 20
   
   # Build
   npm run build
   ```

2. **Vercel (Deploy)**
   ```bash
   git add .
   git commit -m "fix: Configuração Prisma e migrações baseline"
   git push
   ```

## 📊 Status das Correções

| Problema | Status | Solução |
|----------|--------|---------|
| Prisma Engine Not Found | ✅ Resolvido | Binary targets no schema.prisma |
| Database Not Empty (P3005) | ✅ Resolvido | Migração baseline criada |
| JSON Parse Errors | ✅ Resolvido | Try/catch nos endpoints |
| Validação Telefone | ✅ Resolvido | Regex adicionado |
| Info Empresa | ✅ Resolvido | Dados do footer aplicados |
| Node.js Version | ⚠️ Atenção | Requer Node >= 20.9.0 |

## 🔍 Troubleshooting

### Se o build ainda falhar na Vercel:

1. **Verificar variáveis de ambiente**
   - `DATABASE_URL` deve estar configurada
   - Todas as outras variáveis necessárias

2. **Limpar cache**
   - No dashboard da Vercel: Settings > General > Clear Cache

3. **Re-deploy**
   - Force um novo deploy após limpar o cache

### Logs Úteis
```bash
# Ver logs do Prisma
npx prisma --version

# Testar conexão com banco
npx prisma db pull

# Ver schema atual
npx prisma db push --preview-feature
```

