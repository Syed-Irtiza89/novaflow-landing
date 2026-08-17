import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
] as const

export function BrandMark() {
  return (
    <a href="#top" className="flex items-center gap-2.5 text-ink dark:text-paper">
      <span className="relative grid size-8 place-items-center bg-ink dark:bg-lime">
        <span className="absolute size-3 rotate-45 bg-lime dark:bg-ink" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight">NovaFlow</span>
    </a>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)

  function close(): void {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md dark:border-paper/10 dark:bg-ink/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <BrandMark />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition hover:text-ink dark:text-paper/70 dark:hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#demo"
            className="hidden border border-ink bg-ink px-4 py-2 text-sm font-semibold text-paper transition hover:bg-lime hover:text-ink dark:border-lime dark:bg-lime dark:text-ink dark:hover:bg-paper md:inline-flex"
          >
            Book a demo
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center border border-ink/15 md:hidden dark:border-paper/20"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-ink/10 px-5 py-4 md:hidden dark:border-paper/10">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={close}
              className="mt-2 inline-flex justify-center border border-ink bg-ink px-4 py-2.5 text-sm font-semibold text-paper dark:border-lime dark:bg-lime dark:text-ink"
            >
              Book a demo
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
