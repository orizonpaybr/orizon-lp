// instrumentation.ts - Next.js Instrumentation API
// Este arquivo garante que o Prisma seja inicializado corretamente na Vercel

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Só executa em produção ou se DATABASE_URL estiver configurada
    if (process.env.NODE_ENV === 'production' || process.env.DATABASE_URL) {
      try {
        // Força a geração do Prisma Client no startup
        const { prisma } = await import('./lib/prisma')
        
        // Testa a conexão
        await prisma.$connect()
        
        console.log('✅ Prisma Client inicializado com sucesso')
      } catch (error) {
        console.warn('⚠️ Erro ao inicializar Prisma Client:', error)
        // Não falha o build se houver erro na conexão
      }
    } else {
      console.log('ℹ️ Pulando inicialização do Prisma (ambiente de desenvolvimento sem DATABASE_URL)')
    }
  }
}

