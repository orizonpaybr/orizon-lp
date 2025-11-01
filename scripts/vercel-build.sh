#!/bin/bash
set -e

echo "🔧 Gerando Prisma Client..."
npx prisma generate

echo "📦 Verificando arquivos do Prisma..."
ls -la node_modules/.prisma/client/ || echo "Prisma client ainda não gerado"

echo "🏗️ Building Next.js..."
next build

echo "✅ Build completo!"

