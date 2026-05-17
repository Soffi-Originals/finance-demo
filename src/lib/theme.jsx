import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const STORAGE_KEY = 'sophie-finance-theme'
const ThemeContext = createContext(null)

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function readDomTheme() {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function isExternallyManaged() {
  return document.documentElement.hasAttribute('data-soffi-theme')
}

export function ThemeProvider({ children }) {
  const [resolvedTheme, setResolvedTheme] = useState(() => {
    if (typeof document === 'undefined') return 'light'
    return readDomTheme()
  })

  useEffect(() => {
    if (!isExternallyManaged()) {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      const initial = stored === 'dark' || stored === 'light' ? stored : getSystemTheme()
      document.documentElement.classList.toggle('dark', initial === 'dark')
    }
    setResolvedTheme(readDomTheme())
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => setResolvedTheme(readDomTheme()))
    observer.observe(root, { attributes: true, attributeFilter: ['class', 'data-soffi-theme'] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event) => {
      if (isExternallyManaged()) return
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored === 'dark' || stored === 'light') return
      document.documentElement.classList.toggle('dark', event.matches)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    document.documentElement.style.colorScheme = resolvedTheme
  }, [resolvedTheme])

  const toggleTheme = useCallback(() => {
    const next = readDomTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next === 'dark')
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const setTheme = useCallback((theme) => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [])

  return (
    <ThemeContext.Provider value={{ resolvedTheme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
