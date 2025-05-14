// Implementasi dalam Komponen React dengan optimasi waktu pemuatan

import React, { useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  useEffect(() => {
    // Lakukan preload gambar LCP ketika komponen mounting
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = '/assets/profile-picture-VciTXMnL.webp';
    preloadLink.type = 'image/webp';
    document.head.appendChild(preloadLink);
  }, []);

  return (
    <section className="hero">
      <div className="hero-text">
        <p className="intro">Hi, I'm</p>
        <h1>Erdi Pratama</h1>
        <h2>Web Developer</h2>
        <p className="welcome">Welcome to My personal website.</p>
      </div>
      
      <div className="hero-img">
        <picture>
          {/* Gunakan ukuran gambar yang tepat untuk desktop */}
          <source 
            media="(min-width: 1024px)"
            srcSet="/assets/profile-picture-desktop.avif" 
            type="image/avif"
          />
          <source 
            media="(min-width: 1024px)"
            srcSet="/assets/profile-picture-desktop.webp" 
            type="image/webp"
          />
          
          {/* Ukuran gambar untuk perangkat mobile/tablet */}
          <source 
            srcSet="/assets/profile-picture-mobile.avif" 
            type="image/avif"
          />
          <source 
            srcSet="/assets/profile-picture-mobile.webp" 
            type="image/webp"
          />
          
          <img 
            src="/assets/profile-picture-VciTXMnL.png" 
            alt="Erdi Pratama"
            width="400" 
            height="400"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
      </div>
    </section>
  );
};

export default Hero;