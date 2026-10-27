import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        verde: { DEFAULT: '#1F3A2E', deep: '#16291F' },
        // Latão: só em pormenores (linhas finas, numerais, sublinhado do selo).
        // `deep` é o mesmo latão escurecido para numerais sobre pergaminho (contraste 3.8:1, texto grande).
        latao: { DEFAULT: '#C9A227', soft: '#DCC069', deep: '#8A6D0F' },
        pergaminho: { DEFAULT: '#EAE2D2', alt: '#E2D8C4' },
        tinta: { DEFAULT: '#14181B', soft: '#4A5256' },
        // `pedra` original (#9C9284) só em elementos decorativos; `deep` para texto pequeno sobre pergaminho (4.7:1).
        pedra: { DEFAULT: '#9C9284', deep: '#6B6254' },
        erro: '#8C2F2F',
      },
      fontFamily: {
        display: ['Fraunces', '"Iowan Old Style"', 'Georgia', 'serif'],
        body: ['Manrope', 'system-ui', '"Segoe UI"', 'sans-serif'],
      },
      letterSpacing: { widest2: '0.18em' },
      maxWidth: { wrap: '1180px' },
    },
  },
  plugins: [],
} satisfies Config
