import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { LogoCloud } from './components/LogoCloud'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { LeadForm } from './components/LeadForm'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div id="top" className="min-h-dvh bg-paper text-ink dark:bg-ink dark:text-paper">
      <Nav />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </div>
  )
}
