import { PrismaClient } from '@prisma/client'

// Singleton pattern para evitar múltiplas instâncias do Prisma Client
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Forçar importação do engine em produção
if (process.env.NODE_ENV === 'production') {
  prisma.$connect().catch((error) => {
    console.error('Erro ao conectar com Prisma:', error)
  })
}
