import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { Activity, Clock, GitBranch, LayoutGrid, ShieldCheck, Zap } from 'lucide-react'

type Feature = {
  title: string
  body: string
  icon: LucideIcon
}

const features: Feature[] = [
  {
    title: 'Pipeline OS',
    body: 'One live pipeline from brief to invoice. Status lives here — not in twelve Slack threads.',
    icon: GitBranch,
  },
  {
    title: 'Client rooms',
    body: 'Branded portals for files, comments, and sign-off. Approvals that actually stick.',
    icon: LayoutGrid,
  },
  {
    title: 'Retainers & time',
    body: 'Capacity against retainers, in real time. See what is profitable before the month closes.',
    icon: Clock,
  },
  {
    title: 'Approval locks',
    body: 'Stages do not move until the right person signs. Politics, handled. Scope, protected.',
    icon: ShieldCheck,
  },
  {
    title: 'Automation rails',
    body: 'Nudge, escalate, and hand off without a producer chasing the thread by hand.',
    icon: Zap,
  },
  {
    title: 'Agency pulse',
    body: 'Utilization, margin, and delivery risk on one screen. Run the floor, not a dashboard zoo.',
    icon: Activity,
  },
]

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-b border-ink/10 dark:border-paper/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-ink/50 uppercase dark:text-paper/50">
          Product
        </p>
        <h2 className="mt-3 max-w-xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
          Built for shops that outgrew the stack they duct-taped together.
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group border border-ink/12 bg-paper p-6 dark:border-paper/15 dark:bg-ink"
              >
                <span className="grid size-10 place-items-center bg-ink text-lime transition group-hover:bg-lime group-hover:text-ink dark:bg-lime dark:text-ink dark:group-hover:bg-paper">
                  <Icon className="size-5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-paper/65">{feature.body}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
