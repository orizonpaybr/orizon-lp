import { PrismaClient } from '@prisma/client'

// Configuração do Prisma para edge runtime e serverless
declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({
    log: ['error', 'warn'],
  })
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient({
      log: ['query', 'error', 'warn'],
    })
  }
  prisma = global.cachedPrisma
}

export { prisma }

