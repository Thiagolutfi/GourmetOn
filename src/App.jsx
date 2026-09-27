import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import FoodSection from './components/FoodSection'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#inicio" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:p-3">Pular para o conteúdo</a>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <FoodSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
