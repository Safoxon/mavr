import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Courses from './components/Courses.jsx'
import Teachers from './components/Teachers.jsx'
import PathSection from './components/PathSection.jsx'
import Testimonials from './components/Testimonials.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Header />
      <Hero />
      <Courses />
      <Teachers />
      <PathSection />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  )
}
