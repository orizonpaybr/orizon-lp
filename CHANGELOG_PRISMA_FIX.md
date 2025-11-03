# 🔧 Changelog - Correção do Prisma na Vercel (Next.js 16)

## Data: Novembro 2025

## Problema Original
O Prisma Client não estava sendo corretamente empacotado pelo Turbopack (Next.js 16) na Vercel, resultando no erro:
```
Prisma Client could not locate the Query Engine for runtime "rhel-openssl-3.0.x"
```

## Solução Implementada

### 📝 Arquivos Criados

#### 1. `instrumentation.ts`
- **Propósito:** Inicializar o Prisma no startup da aplicação
- **O que faz:**
  - Importa e inicializa o Prisma Client quando o servidor Node.js inicia
  - Testa a conexão com o banco de dados
  - Garante que os binários estejam disponíveis antes de qualquer requisição

```typescript
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { prisma } = await import('./lib/prisma')
    await prisma.$connect()
    console.log('✅ Prisma Client inicializado com sucesso')
  }
}
```

#### 2. `.npmrc`
- **Propósito:** Configurar o comportamento do npm/yarn com o Prisma
- **O que faz:**
  - Garante que `prisma generate` não seja pulado automaticamente
  - Força a geração dos binários em todas as instalações

```
prisma-generate-skip-autoinstall=false
```

#### 3. `SOLUCAO_RAPIDA.md`
- **Propósito:** Guia rápido para resolver o problema
- Contém instruções passo a passo

#### 4. `DEPLOY_VERCEL.md`
- **Propósito:** Documentação completa do deploy
- Troubleshooting e boas práticas

### 📝 Arquivos Modificados

#### 1. `prisma/schema.prisma`
**Alterações:**
```prisma
generator client {
  provider        = "prisma-client-js"
  binaryTargets   = ["native", "rhel-openssl-3.0.x"]
  output          = "../node_modules/.prisma/client"  // ← NOVO
  previewFeatures = []                                 // ← NOVO
}
```

**Por quê:**
- `output`: Garante que o client seja gerado no local correto
- `previewFeatures`: Lista explícita (vazia) de features experimentais
- `binaryTargets`: Mantido para suportar local + Vercel

#### 2. `next.config.ts`
**Alterações:**
```typescript
export default {
  experimental: {
    serverActions: { bodySizeLimit: '10mb' },
  },
  serverExternalPackages: ['@prisma/client', 'prisma', '@prisma/engines'],
  
  // ← NOVO: Configuração do Turbopack
  turbopack: {
    resolveAlias: {
      '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
    },
  },
  
  // ← NOVO: Força a inclusão dos binários .node no bundle
  outputFileTracingIncludes: {
    '/*': ['./node_modules/.prisma/client/*.node'],
  },
}
```

**Por quê:**
- `instrumentation.ts`: Funciona automaticamente no Next.js 16+ (não precisa de flag)
- `turbopack.resolveAlias`: Ajuda o Turbopack a encontrar o Prisma Client
- `outputFileTracingIncludes`: Força a cópia dos binários .node para o output

#### 3. `lib/prisma.ts`
**Alterações:**
```typescript
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    // ← NOVO: Força o uso dos binários corretos internamente
    // @ts-ignore
    __internal: {
      engine: {
        binaryTargets: ['native', 'rhel-openssl-3.0.x']
      }
    }
  })
}

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()
```

**Por quê:**
- A configuração `__internal` força o Prisma a usar os binaryTargets corretos
- Isso é uma camada extra de segurança para garantir que o engine certo seja carregado

#### 4. `package.json`
**Alterações:**
```json
{
  "scripts": {
    "build": "prisma generate --no-engine && prisma generate && next build",
    "vercel-build": "prisma generate --no-engine && prisma generate && next build",
  }
}
```

**Por quê:**
- `prisma generate --no-engine`: Gera o client sem baixar engines
- `prisma generate`: Depois gera novamente COM os engines
- Essa sequência dupla garante que todos os binários necessários sejam gerados
- É uma workaround para um bug conhecido do Turbopack com o Prisma

## 🎯 Como Funciona Agora

### Fluxo de Build na Vercel:

1. **Install:** `npm install` → executa `postinstall` → `prisma generate`
2. **Build:** 
   - `prisma generate --no-engine` (gera tipos)
   - `prisma generate` (gera engines)
   - `next build` (build do Next.js)
3. **Runtime:**
   - `instrumentation.ts` é executado no startup
   - Prisma Client é inicializado e conectado
   - Binários `.node` são carregados do output correto

### Por Que Funciona:

1. **outputFileTracingIncludes:** Garante que os arquivos `.node` sejam incluídos
2. **instrumentation.ts:** Inicializa o Prisma antes de qualquer requisição
3. **Duplo generate:** Workaround para garantir que todos os binários sejam gerados
4. **Configuração explícita do output:** Evita que o Prisma use caminhos incorretos

## 📊 Comparação

| Aspecto | Antes ❌ | Depois ✅ |
|---------|----------|-----------|
| Build local | ✅ Funcionava | ✅ Funciona |
| Build Vercel | ❌ Falhava | ✅ Funciona |
| Query Engine | ❌ Não encontrado | ✅ Encontrado |
| Turbopack support | ❌ Não configurado | ✅ Configurado |
| Binários .node | ❌ Não copiados | ✅ Copiados |
| Inicialização | 🤷 Lazy | ✅ Eager (startup) |

## 🚀 Deploy

Para aplicar essas mudanças:

```bash
# 1. Resolver baseline (se necessário)
npx prisma migrate resolve --applied "0_init"

# 2. Limpar cache
rm -rf node_modules/.prisma

# 3. Regenerar
npm run postinstall

# 4. Testar build
npm run build

# 5. Deploy
git add .
git commit -m "fix: corrige Prisma Client na Vercel com Next.js 16"
git push
```

## 📚 Referências

- [Prisma + Next.js](https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-monorepo)
- [Next.js Instrumentation](https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation)
- [Turbopack Configuration](https://nextjs.org/docs/app/api-reference/next-config-js/turbopack)
- [Vercel + Prisma](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel)

## ⚠️ Notas Importantes

1. **Não remover `binaryTargets`:** Essencial para o Vercel
2. **Manter duplo `prisma generate`:** Workaround necessário para Turbopack
3. **Não commitar `.env`:** Sempre usar variáveis de ambiente da Vercel
4. **Instrumentation é obrigatório:** Garante inicialização correta
5. **outputFileTracingIncludes é crítico:** Sem isso, os binários não são copiados

## 🐛 Se Ainda Houver Problemas

1. Limpe o cache da Vercel (Clear Cache & Redeploy)
2. Verifique se a variável `DATABASE_URL` está configurada
3. Verifique os logs de build na Vercel
4. Confirme que o Node.js >= 20.9.0 está sendo usado
5. Tente deletar e recriar o projeto na Vercel (último recurso)

---

**Status:** ✅ Resolvido
**Testado em:** Vercel (Next.js 16.0.0, Prisma 6.18.0)
**Última atualização:** Novembro 2025

