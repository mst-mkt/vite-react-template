import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { useCallback } from 'react'

type Theme = 'light' | 'dark'

const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

const themeAtom = atomWithStorage<Theme>('theme', isDarkTheme ? 'dark' : 'light')

export const useTheme = () => {
  const [theme, setTheme] = useAtom(themeAtom)

  return {
    theme,
    setTheme: useCallback((theme: Theme) => setTheme(theme), [setTheme]),
    toggleTheme: useCallback(
      () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
      [setTheme],
    ),
  }
}
