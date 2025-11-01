# Checklist de Deploy - Vercel

## ✅ Arquivos Atualizados

### 1. Configuração do Prisma
- [x] `prisma/schema.prisma` - Binary targets para Vercel/AWS Lambda
- [x] `lib/prisma.ts` - Cliente singleton
- [x] `lib/prisma-edge.ts` - Cliente otimizado para serverless

### 2. Next.js
- [x] `next.config.ts` - External packages do Prisma
- [x] `vercel.json` - Comandos de build customizados

### 3. Package.json
- [x] Scripts de build atualizados
- [x] Script `vercel-build` adicionado

### 4. APIs
- [x] `app/api/send-email/route.ts` - Tratamento de JSON melhorado
- [x] `app/api/send-email/route-with-prisma.ts` - Tratamento de JSON melhorado
- [x] `app/api/send-ouvidoria/route.ts` - Validação de telefone com regex
- [x] `app/api/send-ouvidoria/route-with-prisma.ts` - Validação de telefone com regex

### 5. Informações da Empresa
- [x] Todos os emails atualizados com:
  - Razão Social: Orizon pay instituição de pagamento Ltda
  - CNPJ: 63.095.227/0001-88
  - Endereço: Avenida - PREF OSMAR CUNHA, 416, Centro, Florianópolis, SC, CEP: 88.015-100

## 🔧 Variáveis de Ambiente (Vercel Dashboard)

Certifique-se de configurar estas variáveis:

```bash
DATABASE_URL=postgresql://...
RESEND_API_KEY=re_...
R2_ACCESS_KEY_ID=...
R2_SECRET_ACCESS_KEY=...
R2_BUCKET_NAME=orizon-lp
R2_ACCOUNT_ID=...
R2_PUBLIC_URL=https://...
```

## 🚀 Próximos Passos no Deploy

1. **Commit e Push**
   ```bash
   git add .
   git commit -m "fix: Configuração do Prisma para Vercel e melhorias nas APIs"
   git push
   ```

2. **Vercel**
   - O deploy será automático após o push
   - Verifique se todas as variáveis de ambiente estão configuradas
   - Monitore os logs de build

3. **Testes Pós-Deploy**
   - Testar formulário de contato
   - Testar formulário de ouvidoria
   - Verificar salvamento no banco de dados
   - Verificar envio de emails

## 🐛 Problemas Comuns

### Erro: Prisma Engine Not Found
**Solução**: Já configurado no `schema.prisma` com `binaryTargets`

### Erro: JSON Parse
**Solução**: Já implementado tratamento de erro nos endpoints

### Erro: Telefone inválido
**Solução**: Regex atualizado para aceitar `(XX) XXXXX-XXXX` ou `(XX) XXXX-XXXX`

## 📝 Notas Importantes

- O Prisma Client é gerado automaticamente durante o build
- As migrações são aplicadas com `prisma migrate deploy`
- O Next.js trata o Prisma como external package para evitar bundling incorreto
- Todas as validações de telefone agora usam regex consistente

