import React, { lazy, Suspense } from 'react';
// Komponen yang mempengaruhi LCP dan tampilan awal diimpor secara langsung
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

// Komponen di bawah fold di-lazy load untuk meningkatkan performa LCP
const About = lazy(() => import('../components/About'));
const Skills = lazy(() => import('../components/Skills'));
const Experience = lazy(() => import('../components/Experience'));
const Portfolio = lazy(() => import('../components/Portfolio'));
const Footer = lazy(() => import('../components/Footer'));

// Component loading simpel untuk menampilkan saat komponen lazy sedang dimuat
const LoadingFallback = () => <div className="loading-section">Loading...</div>;

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
      
      {/* Lazy load komponen di bawah fold */}
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Skills />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Experience />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Portfolio />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;