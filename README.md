# 🚀 Orizon - Landing Page

Landing page moderna e profissional para a Orizon, plataforma de pagamentos para empresas.

## ✨ Características

- 🎨 Design moderno e responsivo
- ⚡ Next.js 16 com App Router
- 🎭 Animações suaves com Framer Motion
- 📝 Formulário validado com React Hook Form + Zod
- 🎯 TypeScript para type safety
- 💅 Tailwind CSS para estilização
- 🔍 SEO otimizado
- 📱 Totalmente responsivo

## 🎨 Paleta de Cores

```typescript
colors: {
  primary: {
    DEFAULT: '#007BC7',
    hover: '#006BA8',
    light: '#009EE0',
  },
  secondary: {
    DEFAULT: '#009EE0',
    light: '#00BFFF',
  },
  accent: {
    DEFAULT: '#FF8A00',
    hover: '#E67A00',
  },
  dark: {
    DEFAULT: '#0C243B',
    alt: '#000000',
  },
  background: '#FFFFFF',
  card: '#FFFFFF',
  gray: {
    light: '#F3F3F3',
    lighter: '#EBEBEB',
  },
}
```

## 📦 Estrutura do Projeto

```
orizon-lp/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── layout/
│   │   ├── header.tsx      # Cabeçalho
│   │   └── footer.tsx      # Rodapé
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── features-section.tsx
│   │   ├── pix-section.tsx
│   │   ├── payment-link-section.tsx
│   │   ├── checkout-section.tsx
│   │   ├── cards-section.tsx
│   │   ├── stats-section.tsx
│   │   ├── media-section.tsx
│   │   └── contact-section.tsx
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── select.tsx
│       ├── checkbox.tsx
│       ├── container.tsx
│       └── section.tsx
├── lib/
│   ├── types.ts            # Tipos TypeScript
│   └── validations.ts      # Schemas de validação
└── public/
    └── images/             # Imagens do site
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+ instalado
- npm ou pnpm ou yarn

### Instalação

1. **Instale as dependências:**

```bash
npm install
# ou
pnpm install
# ou
yarn install
```

2. **Rode o servidor de desenvolvimento:**

```bash
npm run dev
# ou
pnpm dev
# ou
yarn dev
```

3. **Abra o navegador:**

Acesse [http://localhost:3000](http://localhost:3000)

## 📱 Seções do Site

1. **Hero Section** - Seção inicial com destaque para o valor da empresa
2. **Features Section** - Funcionalidades principais (PIX, Cartões, Link, Checkout)
3. **PIX Section** - Detalhes sobre pagamentos via PIX
4. **Payment Link Section** - Informações sobre link de pagamento
5. **Checkout Section** - Checkout transparente
6. **Cards Section** - Aceitação de cartões
7. **Stats Section** - Números e estatísticas
8. **Media Section** - Logos da mídia
9. **Contact Section** - Formulário de contato

## 🎯 Funcionalidades Implementadas

### Componentes UI Reutilizáveis
- ✅ Button com variantes (primary, secondary, outline)
- ✅ Input com validação
- ✅ Textarea com validação
- ✅ Select com validação
- ✅ Checkbox com validação
- ✅ Container responsivo
- ✅ Section wrapper

### Animações
- ✅ Fade in ao entrar na viewport
- ✅ Slide horizontais
- ✅ Scale em hover
- ✅ Transições suaves

### Formulário de Contato
- ✅ Validação com Zod
- ✅ React Hook Form
- ✅ Mensagens de erro personalizadas
- ✅ Feedback visual ao submeter
- ✅ Campos obrigatórios marcados

### Responsividade
- ✅ Mobile first
- ✅ Breakpoints: sm, md, lg, xl
- ✅ Menu hamburguer no mobile
- ✅ Grid adaptativo

## 🛠️ Tecnologias Utilizadas

- **Next.js 16** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Estilização
- **Framer Motion** - Animações
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **React Icons** - Ícones

## 📝 Próximos Passos

- [ ] Integrar com API backend
- [ ] Adicionar Google Analytics
- [ ] Implementar chat online
- [ ] Adicionar mais animações
- [ ] Otimizar imagens com next/image
- [ ] Adicionar testes

## 🎨 Customização

Para customizar as cores, edite o arquivo `app/globals.css`:

```css
:root {
  --primary: #007BC7;
  --accent: #FF8A00;
  /* ... outras variáveis */
}
```

## 📄 Licença

Este projeto é privado e confidencial.

## 👤 Autor

Desenvolvido para Orizon - Plataforma de Pagamentos

---

**Nota:** Certifique-se de rodar `npm install` antes de iniciar o projeto para instalar todas as dependências necessárias.
