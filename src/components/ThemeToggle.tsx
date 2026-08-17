import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const STORAGE_KEY = 'novaflow.theme'

type Theme = 'light' | 'dark'

function readTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  localStorage.setItem(STORAGE_KEY, theme)
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document === 'undefined'
      ? 'light'
      : document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light',
  )

  useEffect(() => {
    const initial = readTheme()
    setTheme(initial)
    applyTheme(initial)
  }, [])

  function toggle(): void {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="grid size-10 place-items-center border border-ink/15 bg-paper text-ink transition hover:border-ink hover:bg-lime dark:border-paper/20 dark:bg-ink dark:text-paper dark:hover:border-lime dark:hover:bg-lime dark:hover:text-ink"
    >
      {isDark ? <Sun className="size-4" strokeWidth={2.25} /> : <Moon className="size-4" strokeWidth={2.25} />}
    </button>
  )
}
