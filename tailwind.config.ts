import aspectRatio from '@tailwindcss/aspect-ratio'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import scrollbar from 'tailwind-scrollbar'
import type { Config } from 'tailwindcss'

const alphas = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const

const colorMix = (color1: string, color2: string, percentage: number) => {
  return `color-mix(in srgb, ${color1}, ${color2} ${percentage}%)`
}
const hsl = (channels: TemplateStringsArray) => `hsl(var(--${channels[0]}))`
const hsla = (channels: TemplateStringsArray) => `hsl(var(--${channels[0]}) / <alpha-value>)`

const makeColorPalette = (color: string) => ({
  50: colorMix(color, 'hsl(var(--foreground))', 70),
  100: colorMix(color, 'hsl(var(--foreground))', 50),
  200: colorMix(color, 'hsl(var(--foreground))', 30),
  300: colorMix(color, 'hsl(var(--foreground))', 10),
  400: colorMix(color, 'hsl(var(--foreground))', 5),
  500: color,
  600: colorMix(color, 'hsl(var(--background))', 10),
  700: colorMix(color, 'hsl(var(--background))', 30),
  800: colorMix(color, 'hsl(var(--background))', 50),
  900: colorMix(color, 'hsl(var(--background))', 70),
})

const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: hsla`background`,
          ...Object.fromEntries(
            alphas.map((alpha) => [alpha, colorMix(hsla`background`, hsl`foreground`, alpha / 10)]),
          ),
        },
        foreground: {
          DEFAULT: hsla`foreground`,
          ...Object.fromEntries(
            alphas.map((alpha) => [alpha, colorMix(hsla`foreground`, hsl`background`, alpha / 10)]),
          ),
        },
        accent: {
          DEFAULT: hsla`accent`,
          ...makeColorPalette(hsla`accent`),
        },
      },
    },
  },
  plugins: [
    scrollbar({ nocompatible: true, preferredStrategy: 'pseudoelements' }),
    typography,
    forms,
    aspectRatio,
  ],
} satisfies Config

export default config
