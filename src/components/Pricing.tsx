import { useState } from 'react'
import { Check } from 'lucide-react'

type Billing = 'monthly' | 'annual'

type Plan = {
  name: string
  monthly: number
  blurb: string
  cta: string
  featured: boolean
  perks: string[]
}

const plans: Plan[] = [
  {
    name: 'Starter',
    monthly: 29,
    blurb: 'For lean teams proving the OS.',
    cta: 'Start Starter',
    featured: false,
    perks: ['3 workspaces', '5 seats', 'Pipeline + files', 'Email support'],
  },
  {
    name: 'Growth',
    monthly: 79,
    blurb: 'The house plan for growing shops.',
    cta: 'Choose Growth',
    featured: true,
    perks: [
      'Unlimited workspaces',
      '25 seats',
      'Client rooms + automations',
      'Slack + priority support',
    ],
  },
  {
    name: 'Scale',
    monthly: 199,
    blurb: 'For networks and multi-brand ops.',
    cta: 'Talk to sales',
    featured: false,
    perks: ['Unlimited seats', 'SSO + custom roles', 'Audit log', 'Dedicated CSM'],
  },
]

function formatPrice(monthly: number, billing: Billing): string {
  const amount = billing === 'annual' ? monthly * 0.8 : monthly
  return amount % 1 === 0 ? `$${amount}` : `$${amount.toFixed(2)}`
}

export function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly')

  return (
    <section id="pricing" className="scroll-mt-20 border-b border-ink/10 dark:border-paper/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-ink/50 uppercase dark:text-paper/50">
              Pricing
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Sharp plans. No fog.
            </h2>
          </div>

          <div className="flex items-center gap-1 border border-ink p-1 dark:border-paper">
            <button
              type="button"
              onClick={() => setBilling('monthly')}
              className={`px-3 py-1.5 text-sm font-semibold ${
                billing === 'monthly'
                  ? 'bg-ink text-paper dark:bg-paper dark:text-ink'
                  : 'text-ink/60 dark:text-paper/60'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling('annual')}
              className={`px-3 py-1.5 text-sm font-semibold ${
                billing === 'annual'
                  ? 'bg-ink text-paper dark:bg-paper dark:text-ink'
                  : 'text-ink/60 dark:text-paper/60'
              }`}
            >
              Annual <span className="ml-1 bg-lime px-1.5 py-0.5 text-[10px] font-bold text-ink">−20%</span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col border p-6 ${
                plan.featured
                  ? 'border-ink bg-ink text-paper shadow-[8px_8px_0_0_#c6ff4a] dark:border-lime dark:bg-lime dark:text-ink dark:shadow-[8px_8px_0_0_#f4f4ef]'
                  : 'border-ink/15 bg-paper dark:border-paper/15 dark:bg-ink'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                {plan.featured ? (
                  <span
                    className={`text-[10px] font-bold tracking-widest uppercase ${
                      plan.featured ? 'bg-lime px-2 py-0.5 text-ink dark:bg-ink dark:text-lime' : ''
                    }`}
                  >
                    Popular
                  </span>
                ) : null}
              </div>
              <p className={`mt-2 text-sm ${plan.featured ? 'opacity-80' : 'text-ink/65 dark:text-paper/65'}`}>
                {plan.blurb}
              </p>
              <p className="mt-6 font-display text-5xl font-extrabold tracking-tight">
                {formatPrice(plan.monthly, billing)}
                <span className="ml-1 text-base font-semibold opacity-60">/mo</span>
              </p>
              <p className={`mt-1 text-xs ${plan.featured ? 'opacity-70' : 'text-ink/50 dark:text-paper/50'}`}>
                {billing === 'annual' ? 'Billed annually' : 'Billed monthly'}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-2.5 text-sm">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0" strokeWidth={2.5} />
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href="#demo"
                className={`mt-8 inline-flex justify-center px-4 py-3 text-sm font-semibold ${
                  plan.featured
                    ? 'bg-lime text-ink dark:bg-ink dark:text-lime'
                    : 'border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper dark:border-paper dark:text-paper dark:hover:bg-paper dark:hover:text-ink'
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
