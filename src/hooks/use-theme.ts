import { useCallback, useLayoutEffect, useSyncExternalStore } from 'react'
import { THEMES, THEME_STORAGE_KEY, type Theme } from '../constants/theme'

export const loadTheme = () => {
  const storageValue = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (storageValue && THEMES.includes(storageValue as Theme)) {
    document.documentElement.classList.add(storageValue)
  } else {
    document.documentElement.classList.add(THEMES[0])
  }
}

export const useTheme = () => {
  const theme = useSyncExternalStore(
    (callback) => {
      window.addEventListener('storage', callback)
      return () => window.removeEventListener('storage', callback)
    },
    () => {
      const storageValue = window.localStorage.getItem(THEME_STORAGE_KEY)
      return THEMES.includes(storageValue as Theme) ? (storageValue as Theme) : THEMES[0]
    },
    () => THEMES[0],
  )

  const setTheme = useCallback((value: Theme) => {
    window.localStorage.setItem(THEME_STORAGE_KEY, value)
    window.dispatchEvent(new Event('storage'))
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === THEMES[0] ? THEMES[1] : THEMES[0])
  }, [theme, setTheme])

  useLayoutEffect(() => {
    document.documentElement.classList.remove(...THEMES)
    document.documentElement.classList.add(theme)
  }, [theme])

  return { theme, setTheme, toggleTheme }
}
