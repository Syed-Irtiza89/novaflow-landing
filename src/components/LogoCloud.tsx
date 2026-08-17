const companies = [
  { name: 'APEX', mark: 'square' },
  { name: 'NORTHLINE', mark: 'bar' },
  { name: 'VOLT', mark: 'diamond' },
  { name: 'HARBOR', mark: 'circle' },
  { name: 'PIXELWRIGHT', mark: 'tri' },
  { name: 'KITE', mark: 'plus' },
] as const

type Mark = (typeof companies)[number]['mark']

function LogoMark({ mark }: { mark: Mark }) {
  if (mark === 'square') return <span className="size-3 bg-current" />
  if (mark === 'bar') return <span className="h-3 w-5 bg-current" />
  if (mark === 'diamond') return <span className="size-3 rotate-45 bg-current" />
  if (mark === 'circle') return <span className="size-3 rounded-full border-2 border-current" />
  if (mark === 'tri') {
    return (
      <span
        className="size-0 border-x-[6px] border-b-[10px] border-x-transparent border-b-current"
        aria-hidden="true"
      />
    )
  }
  return (
    <span className="relative size-3" aria-hidden="true">
      <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 bg-current" />
      <span className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-current" />
    </span>
  )
}

export function LogoCloud() {
  return (
    <section className="border-b border-ink/10 dark:border-paper/10">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <p className="text-center text-[11px] font-semibold tracking-[0.2em] text-ink/45 uppercase dark:text-paper/45">
          Trusted by independent shops
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-px bg-ink/10 sm:grid-cols-3 lg:grid-cols-6 dark:bg-paper/10">
          {companies.map((company) => (
            <li
              key={company.name}
              className="flex items-center justify-center gap-2 bg-paper py-6 font-display text-sm font-bold tracking-[0.14em] text-ink/55 dark:bg-ink dark:text-paper/55"
            >
              <LogoMark mark={company.mark} />
              {company.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
