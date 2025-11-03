import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Configuração específica para resolver o problema do Query Engine na Vercel
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    // Força o uso do binary correto
    // @ts-ignore - Configuração interna para forçar o engine correto
    __internal: {
      engine: {
        binaryTargets: ['native', 'rhel-openssl-3.0.x']
      }
    }
  })
}

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
