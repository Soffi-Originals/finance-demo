import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../lib/theme'
import { IconButton } from './IconButton'

export function ThemeToggle({ size = 'md' }) {
  const { resolvedTheme, toggleTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  return (
    <IconButton
      variant="secondary"
      size={size}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </IconButton>
  )
}
