import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 dark:border-paper/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(10,10,10,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,10,10,0.06)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,rgba(246,246,239,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(246,246,239,0.07)_1px,transparent_1px)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 border border-ink/15 bg-paper px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase dark:border-paper/20 dark:bg-ink"
          >
            <span className="size-1.5 bg-lime" />
            Workflow OS for agencies
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display text-5xl leading-[0.95] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Run the agency.
            <span className="mt-1 block text-ink/35 dark:text-paper/35">Not the chaos.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg dark:text-paper/70"
          >
            NovaFlow is the operating system for briefs, retainers, approvals, and
            delivery. One pipeline. Zero scavenger hunts. Your team ships; the
            spreadsheet dies.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-lime px-5 py-3 text-sm font-semibold text-ink transition hover:brightness-95"
            >
              Start free
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 border border-ink bg-transparent px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-paper dark:border-paper dark:text-paper dark:hover:bg-paper dark:hover:text-ink"
            >
              <Play className="size-3.5 fill-current" />
              See how it works
            </a>
          </motion.div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
          <motion.div
            aria-hidden="true"
            className="absolute top-4 left-6 size-28 bg-lime"
            animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute right-8 bottom-10 size-20 rotate-45 border-[6px] border-ink dark:border-paper"
            animate={{ rotate: [45, 56, 45], y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute top-16 right-4 h-24 w-8 bg-ink dark:bg-paper"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto mt-10 w-[88%] border border-ink bg-paper shadow-[12px_12px_0_0_#0a0a0a] dark:border-paper dark:bg-ink dark:shadow-[12px_12px_0_0_#c6ff4a]"
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-4 py-3 dark:border-paper/15">
              <span className="font-display text-sm font-bold">Live pipeline</span>
              <span className="bg-lime px-2 py-0.5 text-[10px] font-bold tracking-wider text-ink uppercase">
                4 live
              </span>
            </div>
            <ul className="divide-y divide-ink/10 text-sm dark:divide-paper/15">
              {[
                { stage: 'Brief', name: 'Harbor rebrand', tone: 'bg-ink text-paper dark:bg-paper dark:text-ink' },
                { stage: 'Make', name: 'Volt launch kit', tone: 'bg-lime text-ink' },
                { stage: 'Review', name: 'Kite Q3 site', tone: 'border border-ink/20 dark:border-paper/30' },
                { stage: 'Ship', name: 'Northline pack', tone: 'border border-ink/20 dark:border-paper/30' },
              ].map((row) => (
                <li key={row.name} className="flex items-center justify-between gap-3 px-4 py-3">
                  <span className={`px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase ${row.tone}`}>
                    {row.stage}
                  </span>
                  <span className="truncate font-medium">{row.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
