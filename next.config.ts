import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  serverExternalPackages: ['@prisma/client', 'prisma', '@prisma/engines'],
  // Configuração do Turbopack para incluir os binários do Prisma
  turbopack: {
    resolveAlias: {
      '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
    },
  },
  // Configuração adicional para garantir que os binários sejam copiados
  outputFileTracingIncludes: {
    '/*': ['./node_modules/.prisma/client/*.node'],
  },
};

export default nextConfig;
