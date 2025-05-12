import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio/>
        <Footer />
        
    </>
  )
}

export default Home