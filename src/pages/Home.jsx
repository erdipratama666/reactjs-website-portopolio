import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

function Home() {
  return (
    <>
        <SEO
        title="Beranda | Erdi Pratama"
        description="Ini halaman beranda dari portofolio Erdi Pratama"
        url="https://www.erdipratama.my.id/"
        />
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