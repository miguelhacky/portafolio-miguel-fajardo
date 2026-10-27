import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ScrollProgress'
import { BackToTop } from './components/BackToTop'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  useEffect(() => {
    // El documento no debe conservar el foco del menú móvil al cambiar de vista.
    document.documentElement.dataset.ready = 'true'
    return () => {
      delete document.documentElement.dataset.ready
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido principal
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  )
}
