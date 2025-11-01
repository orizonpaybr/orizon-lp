import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ['@prisma/client', '@prisma/engines'],
  turbopack: {},
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', '@prisma/engines'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Não adicionar Prisma aos externals para permitir bundling correto
      config.externals = config.externals || [];
    }
    return config;
  },
  // Garantir que o output seja standalone para Vercel
  output: 'standalone',
};

export default nextConfig;
