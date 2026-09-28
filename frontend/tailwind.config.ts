import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        verde: {
          DEFAULT: '#1F3A2E',
          deep: '#16291F',
        },
        latao: {
          DEFAULT: '#C9A227',
          soft: '#DCC069',
        },
        pergaminho: {
          DEFAULT: '#EAE2D2',
          alt: '#E2D8C4',
        },
        tinta: '#14181B',
        pedra: '#9C9284',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.14em',
      },
      maxWidth: {
        wrap: '1180px',
      },
    },
  },
  plugins: [],
} satisfies Config
