import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const STORAGE_KEY = 'novaflow.leads'

type Lead = {
  name: string
  email: string
  company: string
  createdAt: string
}

type FieldErrors = {
  name?: string
  email?: string
  company?: string
}

type FormValues = {
  name: string
  email: string
  company: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function readLeads(): Lead[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as Lead[]) : []
  } catch {
    return []
  }
}

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {}
  if (values.name.trim().length < 2) errors.name = 'Enter your full name.'
  if (!emailPattern.test(values.email.trim())) errors.email = 'Enter a valid email.'
  if (values.company.trim().length < 2) errors.company = 'Enter your company name.'
  return errors
}

export function LeadForm() {
  const [values, setValues] = useState<FormValues>({ name: '', email: '', company: '' })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const lead: Lead = {
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      createdAt: new Date().toISOString(),
    }
    const leads = readLeads()
    leads.push(lead)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads))
    setSubmitted(true)
  }

  return (
    <section id="demo" className="scroll-mt-20 border-b border-ink/10 dark:border-paper/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-ink/50 uppercase dark:text-paper/50">
            Demo
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Get the operating system on your floor.
          </h2>
          <p className="mt-4 max-w-md text-ink/70 dark:text-paper/70">
            Tell us who you are. We store the request locally in this browser — no
            email is sent. A specialist would normally follow up within one business day.
          </p>
        </div>

        <div className="border border-ink bg-paper p-6 shadow-[10px_10px_0_0_#c6ff4a] dark:border-paper dark:bg-ink dark:shadow-[10px_10px_0_0_#c6ff4a] sm:p-8">
          {submitted ? (
            <div className="flex min-h-64 flex-col items-start justify-center">
              <CheckCircle2 className="size-10 text-ink dark:text-lime" strokeWidth={1.75} />
              <h3 className="mt-4 font-display text-2xl font-bold">You are on the list.</h3>
              <p className="mt-2 text-sm text-ink/70 dark:text-paper/70">
                Saved to this browser. When you are ready, book time with ops and we
                will map your pipeline live.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
              <Field
                id="lead-name"
                label="Name"
                autoComplete="name"
                value={values.name}
                error={errors.name}
                onChange={(value) => setValues((prev) => ({ ...prev, name: value }))}
              />
              <Field
                id="lead-email"
                label="Email"
                type="email"
                autoComplete="email"
                value={values.email}
                error={errors.email}
                onChange={(value) => setValues((prev) => ({ ...prev, email: value }))}
              />
              <Field
                id="lead-company"
                label="Company"
                autoComplete="organization"
                value={values.company}
                error={errors.company}
                onChange={(value) => setValues((prev) => ({ ...prev, company: value }))}
              />
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-lime px-4 py-3 text-sm font-semibold text-ink transition hover:brightness-95"
              >
                Request a demo
                <ArrowRight className="size-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

type FieldProps = {
  id: string
  label: string
  value: string
  error?: string
  type?: string
  autoComplete: string
  onChange: (value: string) => void
}

function Field({ id, label, value, error, type = 'text', autoComplete, onChange }: FieldProps) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1.5 text-sm font-medium">
      {label}
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`border bg-paper px-3 py-2.5 text-base font-normal text-ink outline-none dark:bg-ink dark:text-paper ${
          error
            ? 'border-red-600 dark:border-red-400'
            : 'border-ink/20 focus:border-ink dark:border-paper/25 dark:focus:border-lime'
        }`}
      />
      {error ? (
        <span id={`${id}-error`} className="text-xs font-medium text-red-600 dark:text-red-400">
          {error}
        </span>
      ) : null}
    </label>
  )
}
