import aspectRatio from '@tailwindcss/aspect-ratio'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import scrollbar from 'tailwind-scrollbar'
import type { Config } from 'tailwindcss'

const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    scrollbar({ nocompatible: true, preferredStrategy: 'pseudoelements' }),
    typography,
    forms,
    aspectRatio,
  ],
} satisfies Config

export default config
