import React from 'react'; 
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

function Home() {
  return (
    <>
      <SEO
        title="Erdi Pratama | Web Developer"
        description="Erdi Pratama adalah Web Developer yang berfokus pada pengembangan website dengan JavaScript dan framework modern."
        url="/"
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Home;
