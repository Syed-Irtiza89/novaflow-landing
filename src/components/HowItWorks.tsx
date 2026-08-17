const steps = [
  {
    n: '01',
    title: 'Connect the stack',
    body: 'Slack, Figma, Drive, and billing snap in. Your existing work does not get held hostage.',
  },
  {
    n: '02',
    title: 'Design the flow',
    body: 'Brief → production → review → invoice. Gates that hold, roles that are explicit, no mystery status.',
  },
  {
    n: '03',
    title: 'Run on rails',
    body: 'Automations nudge, escalate, and report. Producers orchestrate. Nobody chases a thread.',
  },
] as const

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 border-b border-ink/10 dark:border-paper/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-ink/50 uppercase dark:text-paper/50">
          How it works
        </p>
        <h2 className="mt-3 max-w-lg font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Three moves. Then the OS compounds.
        </h2>

        <ol className="mt-12 grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="relative overflow-hidden border border-ink/12 bg-paper p-6 dark:border-paper/15 dark:bg-ink"
            >
              <span className="font-display text-6xl font-extrabold leading-none text-lime">
                {step.n}
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-paper/65">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
