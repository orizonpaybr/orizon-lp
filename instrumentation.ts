// instrumentation.ts - Next.js Instrumentation API
// Este arquivo garante que o Prisma seja inicializado corretamente na Vercel

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Força a geração do Prisma Client no startup
    const { prisma } = await import('./lib/prisma')
    
    // Testa a conexão
    await prisma.$connect()
    
    console.log('✅ Prisma Client inicializado com sucesso')
  }
}

