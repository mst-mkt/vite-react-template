import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { useCallback, useEffect } from 'react'

const themes = ['light', 'dark'] as const

type Theme = (typeof themes)[number]

const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

const themeAtom = atomWithStorage<Theme>('theme', isDarkTheme ? 'dark' : 'light')

export const useTheme = () => {
  const [theme, setTheme] = useAtom(themeAtom)

  useEffect(() => {
    document.body.classList.remove(...themes)
    document.body.classList.add(theme)
  }, [theme])

  return {
    theme,
    setTheme: useCallback((theme: Theme) => setTheme(theme), [setTheme]),
    toggleTheme: useCallback(
      () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
      [setTheme],
    ),
  }
}
