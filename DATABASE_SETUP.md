# Configuração do Banco de Dados - Orizon LP

## Estrutura do Banco de Dados

### Tabelas Criadas

1. **contact_forms** - Formulários de contato
2. **complaint_forms** - Manifestações de ouvidoria  
3. **attachments** - Anexos das manifestações

### Campos Principais

#### ContactForm
- `id` - ID único (CUID)
- `firstName` - Nome
- `lastName` - Sobrenome
- `email` - Email
- `phone` - Telefone
- `company` - Empresa
- `website` - Site da empresa (opcional)
- `volume` - Volume de transações
- `message` - Mensagem
- `acceptTerms` - Aceita termos
- `createdAt` - Data de criação
- `updatedAt` - Data de atualização

#### ComplaintForm
- `id` - ID único (CUID)
- `fullName` - Nome completo
- `cpf` - CPF
- `email` - Email
- `phone` - Telefone
- `complaintType` - Tipo de manifestação
- `message` - Mensagem
- `incidentDate` - Data do ocorrido (opcional)
- `acceptLGPD` - Aceita LGPD
- `protocol` - Número de protocolo único
- `status` - Status (pending, in_progress, completed)
- `createdAt` - Data de criação
- `updatedAt` - Data de atualização

#### Attachment
- `id` - ID único (CUID)
- `fileName` - Nome do arquivo
- `fileSize` - Tamanho em bytes
- `fileType` - Tipo MIME
- `filePath` - Caminho do arquivo no storage
- `complaintId` - ID da manifestação
- `createdAt` - Data de criação

## Configuração do Cloudflare R2

### Variáveis de Ambiente Necessárias

```env
CLOUDFLARE_R2_ENDPOINT="https://your-account-id.r2.cloudflarestorage.com"
CLOUDFLARE_R2_ACCESS_KEY_ID="your_access_key_id"
CLOUDFLARE_R2_SECRET_ACCESS_KEY="your_secret_access_key"
CLOUDFLARE_R2_BUCKET_NAME="your_bucket_name"
CLOUDFLARE_R2_PUBLIC_URL="your-public-domain.com"
```

### Estrutura de Pastas no R2

```
complaints/
├── {complaintId}/
│   ├── complaint_{complaintId}_0_{filename}
│   ├── complaint_{complaintId}_1_{filename}
│   └── ...
```

## Comandos para Configuração

### 1. Instalar dependências
```bash
npm install @prisma/client prisma @aws-sdk/client-s3
```

### 2. Configurar banco de dados
```bash
# Gerar cliente Prisma
npm run db:generate

# Aplicar migrações
npm run db:migrate

# Ou fazer push direto (desenvolvimento)
npm run db:push
```

### 3. Visualizar dados
```bash
npm run db:studio
```

## Exemplo de Uso nas APIs

### Salvar Formulário de Contato
```typescript
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
```

### Salvar Manifestação com Anexos
```typescript
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

// Upload dos anexos
const attachments = await Promise.all(
  files.map(async (file, index) => {
    const cloudflarePath = await uploadToCloudflareR2(file, complaintForm.id, index);
    
    return prisma.attachment.create({
      data: {
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        filePath: filePath,
        complaintId: complaintForm.id,
      },
    });
  })
);
```

## Enums Disponíveis

### ComplaintType
- `COMPLAINT` - Reclamação
- `SUGGESTION` - Sugestão  
- `REQUEST` - Solicitação
- `DENUNCIATION` - Denúncia

### ComplaintStatus
- `PENDING` - Pendente
- `IN_PROGRESS` - Em andamento
- `COMPLETED` - Concluída

### TransactionVolume
- `UP_TO_10K` - Até R$10.000
- `UP_TO_50K` - R$10.000 - R$50.000
- `UP_TO_100K` - R$50.000 - R$100.000
- `UP_TO_500K` - R$100.000 - R$500.000
- `UP_TO_1M` - R$500.000 - R$1.000.000
- `MORE_THAN_1M` - Mais de R$1.000.000
