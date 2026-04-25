import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Features from './components/Features'
import Programs from './components/Programs'
import Universities from './components/Universities'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <Programs />
      <Universities />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <LeadForm />
      <Footer />
    </main>
  )
}
