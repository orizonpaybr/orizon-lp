# Configuração Completa - Orizon LP

## ✅ Status da Configuração

### Banco de Dados PostgreSQL (Neon)
- ✅ **Conectado**: `ep-damp-bar-adqht9vq-pooler.c-2.us-east-1.aws.neon.tech`
- ✅ **Schema aplicado**: Tabelas criadas com sucesso
- ✅ **Prisma Client**: Gerado e configurado

### Cloudflare R2 Storage
- ✅ **Bucket**: `orizon-lp`
- ✅ **Account ID**: `f22629ea94b7dbe1d4b9f2384368721d`
- ✅ **Public URL**: `https://pub-d227098c1e5f4d3a9fcca9a32ba34187.r2.dev`
- ✅ **Credenciais**: Configuradas

### APIs de Email (Resend)
- ✅ **API Key**: Configurada e funcionando

## 🗄️ Tabelas Criadas no Banco

### 1. `contact_forms`
```sql
CREATE TABLE "contact_forms" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "website" TEXT,
    "volume" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "acceptTerms" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "contact_forms_pkey" PRIMARY KEY ("id")
);
```

### 2. `complaint_forms`
```sql
CREATE TABLE "complaint_forms" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "complaintType" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "incidentDate" TEXT,
    "acceptLGPD" BOOLEAN NOT NULL,
    "protocol" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "complaint_forms_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "complaint_forms_protocol_key" ON "complaint_forms"("protocol");
```

### 3. `attachments`
```sql
CREATE TABLE "attachments" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "fileType" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "complaintId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "attachments_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "attachments" ADD CONSTRAINT "attachments_complaintId_fkey" 
FOREIGN KEY ("complaintId") REFERENCES "complaint_forms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
```

## 🚀 Próximos Passos

### 1. Substituir APIs Atuais
Substitua os arquivos das APIs atuais pelos novos:

```bash
# Backup das APIs atuais
mv app/api/send-email/route.ts app/api/send-email/route-backup.ts
mv app/api/send-ouvidoria/route.ts app/api/send-ouvidoria/route-backup.ts

# Usar as novas APIs com Prisma
mv app/api/send-email/route-with-prisma.ts app/api/send-email/route.ts
mv app/api/send-ouvidoria/route-with-prisma.ts app/api/send-ouvidoria/route.ts
```

### 2. Testar Upload de Arquivos
As APIs agora fazem upload real para o Cloudflare R2 e salvam os caminhos no banco.

### 3. Visualizar Dados
```bash
npm run db:studio
```

## 📁 Estrutura de Arquivos no Cloudflare R2

```
orizon-lp/
├── complaints/
│   ├── {complaintId}/
│   │   ├── complaint_{complaintId}_0_{filename}
│   │   ├── complaint_{complaintId}_1_{filename}
│   │   └── ...
```

## 🔧 Comandos Úteis

```bash
# Gerar cliente Prisma
npm run db:generate

# Aplicar mudanças no schema
npm run db:push

# Visualizar dados
npm run db:studio

# Criar migração
npm run db:migrate
```

## 📊 Monitoramento

- **Banco de Dados**: Neon Dashboard
- **Storage**: Cloudflare R2 Dashboard
- **Emails**: Resend Dashboard

Tudo configurado e funcionando! 🎉
