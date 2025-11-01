// Este arquivo garante que o Prisma seja inicializado corretamente no deploy
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Força o carregamento do Prisma Client no servidor
    await import('./lib/prisma')
  }
}

