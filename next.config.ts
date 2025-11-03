import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  serverExternalPackages: ['@prisma/client', 'prisma', '@prisma/engines'],
  // Configuração vazia do Turbopack para silenciar o warning
  // O serverExternalPackages já faz o necessário para o Prisma
  turbopack: {},
};

export default nextConfig;
