// Exemplo de função para upload de arquivos para Cloudflare R2
// Você precisará instalar: npm install @aws-sdk/client-s3

import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.CLOUDFLARE_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY!,
  },
});

export async function uploadToCloudflareR2(
  file: File, 
  complaintId: string, 
  index: number
): Promise<string> {
  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `complaint_${complaintId}_${index}_${file.name}`;
    const key = `complaints/${complaintId}/${fileName}`;

    const command = new PutObjectCommand({
      Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: file.type,
      ContentLength: file.size,
    });

    await s3Client.send(command);
    
    // Retorna o caminho público do arquivo
    return `${process.env.CLOUDFLARE_R2_PUBLIC_URL}/${key}`;
  } catch (error) {
    console.error('Erro ao fazer upload para Cloudflare R2:', error);
    throw new Error('Falha no upload do arquivo');
  }
}

// Exemplo de função para deletar arquivo do Cloudflare R2
export async function deleteFromCloudflareR2(filePath: string): Promise<void> {
  try {
    const key = filePath.replace(`https://${process.env.CLOUDFLARE_R2_PUBLIC_URL}/`, '');
    
    const command = new DeleteObjectCommand({
      Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME,
      Key: key,
    });

    await s3Client.send(command);
  } catch (error) {
    console.error('Erro ao deletar arquivo do Cloudflare R2:', error);
    throw new Error('Falha ao deletar arquivo');
  }
}
