import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

type FaqItem = {
  id: string
  q: string
  a: string
}

const items: FaqItem[] = [
  {
    id: 'replace',
    q: 'Can NovaFlow replace our project tool?',
    a: 'For most agencies, yes. Pipeline, files, approvals, and retainers live in one OS. Keep Figma and Slack — retire the status scavenger hunt.',
  },
  {
    id: 'onboarding',
    q: 'How long does onboarding take?',
    a: 'Starter shops are live in a day. Growth and Scale include a mapped pipeline workshop so your real clients, not sample data, run first.',
  },
  {
    id: 'seats',
    q: 'Do clients need seats?',
    a: 'No. Client rooms are guest access: comment, upload, and approve without eating a seat. You only pay for the people who run the work.',
  },
  {
    id: 'contract',
    q: 'Is there a contract?',
    a: 'Monthly is month-to-month. Annual is prepaid with 20% off. Scale can add a master services agreement if your legal team requires it.',
  },
  {
    id: 'data',
    q: 'What happens to our data?',
    a: 'You own it. Export projects, files, and audit history at any time. This demo form stores leads only in your browser — nothing is emailed.',
  },
]

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(items[0].id)

  return (
    <section id="faq" className="scroll-mt-20 border-b border-ink/10 dark:border-paper/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-ink/50 uppercase dark:text-paper/50">
          FAQ
        </p>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Straight answers.
        </h2>

        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10 dark:divide-paper/15 dark:border-paper/15">
          {items.map((item) => {
            const open = openId === item.id
            return (
              <div key={item.id}>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-lg font-bold tracking-tight sm:text-xl">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-5 text-sm leading-relaxed text-ink/70 sm:text-base dark:text-paper/70">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
