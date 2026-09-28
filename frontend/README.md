# CERNE FO — website institucional

Projeto React + TypeScript + Tailwind CSS (Vite), construído a partir da identidade
gráfica da CERNE FO (verde-arquivo, latão, pergaminho — Fraunces + Manrope).

## Como correr localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

Os ficheiros finais ficam em `dist/`, prontos a publicar em qualquer hosting estático
(Vercel, Netlify, Cloudflare Pages, etc.).

## Estrutura

```
src/
  components/
    Logo.tsx        → Selo, ícone, wordmark e lockup compacto (todas as variantes de marca)
    Header.tsx       → Cabeçalho fixo com navegação e menu mobile
    Footer.tsx        → Rodapé
    ThemeToggle.tsx   → Alternância claro/escuro (guarda preferência em localStorage)
    UI.tsx            → Primitivas partilhadas (Section, SectionHeading, Stat, Eyebrow)
  pages/
    Home.tsx          → Página inicial
    Sobre.tsx         → História, percurso e governo
    Servicos.tsx      → As 4 áreas de atuação, em detalhe
    Abordagem.tsx     → Processo de 4 passos + princípios + critérios de decisão
    Patrimonio.tsx    → Tipologias de ativos e casos ilustrativos
    Equipa.tsx        → Equipa e recrutamento
    Contacto.tsx       → Formulário de contacto + dados institucionais
    Marca.tsx          → Página de referência da identidade gráfica (logótipos, paleta, tipografia)
    NotFound.tsx       → Página 404
  App.tsx             → Rotas (react-router-dom)
  main.tsx            → Ponto de entrada
  index.css           → Tailwind + estilos base
tailwind.config.ts     → Tokens de marca (cores, fontes)
```

## Notas de implementação

- **Tipografia**: Fraunces é carregado com o eixo `opsz` completo (9..144); a classe
  utilitária `.opsz-max` força `font-variation-settings: 'opsz' 144` no wordmark, como
  especificado no documento de identidade.
- **Modo escuro**: usa a estratégia `class` do Tailwind. O botão fixo no canto inferior
  direito alterna e persiste a preferência.
- **Formulário de contacto**: atualmente só confirma no cliente (`Contacto.tsx`). Para
  ligar a um serviço real, substitua `handleSubmit` por uma chamada a um endpoint (ex.
  Formspree, Resend, ou uma função serverless própria).
- **Conteúdo**: os nomes de equipa, casos e números de "Sobre" são exemplos ilustrativos
  — substitua pelos dados reais da CERNE FO antes de publicar.
