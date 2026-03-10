import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Mission from "@/components/mission"
import Services from "@/components/services"
import QualityStandards from "@/components/quality-standards"
import WorkProcess from "@/components/work-process"
import Partners from "@/components/partners"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Services />
      <QualityStandards />
      <WorkProcess />
      <Partners />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
