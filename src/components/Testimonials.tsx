const quotes = [
  {
    quote:
      'We killed three tools in a month. NovaFlow is the only place status is true — and clients finally stop asking “where are we?”',
    name: 'Maya Chen',
    role: 'Partner, Apex Studio',
    initials: 'MC',
  },
  {
    quote:
      'Retainers used to be a feeling. Now I can see capacity before we say yes. That is the whole business, honestly.',
    name: 'Jonah Reed',
    role: 'Ops Director, Harbor Digital',
    initials: 'JR',
  },
  {
    quote:
      'Approvals used to leak through email. The lock on review stages paid for Growth in a single avoided reshoot.',
    name: 'Priya Shah',
    role: 'Founder, Kite',
    initials: 'PS',
  },
] as const

export function Testimonials() {
  return (
    <section className="border-b border-ink/10 dark:border-paper/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-ink/50 uppercase dark:text-paper/50">
          Proof
        </p>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Operators, not spectators.
        </h2>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {quotes.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col border border-ink/12 bg-paper p-6 dark:border-paper/15 dark:bg-ink"
            >
              <blockquote className="flex-1 font-display text-lg leading-snug font-semibold tracking-tight text-balance">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="grid size-10 place-items-center bg-lime font-display text-xs font-bold text-ink">
                  {item.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{item.name}</span>
                  <span className="block text-xs text-ink/55 dark:text-paper/55">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
