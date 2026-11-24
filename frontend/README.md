# CERNE FO — website

React 18 + TypeScript + Tailwind 3 + Vite (stack original mantida). Página única de oito blocos
(Menu · Hero · A Casa · Âmbito · Círculo · Princípios · Interlúdio · Contacto · Rodapé),
conforme "Textos e notas para o novo site" (outubro 2026).

    npm install && npm run dev      # http://localhost:5173
    npm run build                   # saída em dist/

## Onde editar
- `src/content/pt.ts` — todos os textos (fonte: documento NEW). `src/content/en.ts` — textos EN (vazio:
  quando forem preenchidos o seletor PT / EN ativa-se sozinho; chaves em falta usam PT).
- `tailwind.config.ts` — paleta e tipografia da identidade.
- `src/components/ContactForm.tsx` — formulário. Defina `VITE_FORM_ENDPOINT` (ex.: Formspree) no hosting
  para envio real por POST JSON; sem isso, abre o email do utilizador (mailto) com a mensagem preenchida.
- `src/pages/Privacidade.tsx` — marcador de posição; falta o texto legal.
- `vercel.json` — reescritas SPA (para /privacidade).

## Login de cliente

O formulário em `/login` envia credenciais para uma API segura. Configure no ambiente de produção:

- `VITE_LOGIN_ENDPOINT` — POST JSON, por exemplo `/api/auth/login`
- `VITE_PASSWORD_RESET_ENDPOINT` — POST JSON, por exemplo `/api/auth/password/reset`

O login deve definir um cookie de sessão HTTP-only no servidor e responder com JSON opcional
`{"redirectTo":"/"}`. Os endpoints não devem guardar a senha no frontend.
