const columns = [
  {
    title: 'Product',
    links: [
      { href: '#features', label: 'Features' },
      { href: '#pricing', label: 'Pricing' },
      { href: '#how', label: 'How it works' },
      { href: '#faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '#demo', label: 'Contact' },
      { href: '#', label: 'About' },
      { href: '#', label: 'Careers' },
      { href: '#', label: 'Press' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '#', label: 'Docs' },
      { href: '#', label: 'Guides' },
      { href: '#', label: 'API' },
      { href: '#', label: 'Status' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '#', label: 'Privacy' },
      { href: '#', label: 'Terms' },
      { href: '#', label: 'Security' },
      { href: '#', label: 'DPA' },
    ],
  },
] as const

export function Footer() {
  return (
    <footer className="bg-ink text-paper dark:bg-paper dark:text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="relative grid size-8 place-items-center bg-lime dark:bg-ink">
              <span className="absolute size-3 rotate-45 bg-ink dark:bg-lime" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">NovaFlow</span>
          </a>
          <p className="mt-4 max-w-xs text-sm text-paper/65 dark:text-ink/65">
            The workflow OS for agencies that want one pipeline, not a pile of tabs.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase opacity-50">
              {column.title}
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-lime dark:hover:opacity-70">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-paper/15 px-5 py-6 text-xs text-paper/50 sm:flex-row sm:justify-between sm:px-8 dark:border-ink/15 dark:text-ink/50">
        <p>© {new Date().getFullYear()} NovaFlow. All rights reserved.</p>
        <p>Fictional product. Demo leads stay in your browser.</p>
      </div>
    </footer>
  )
}
