import avatar from '../assets/profile-picture.webp';
import { FaEnvelope, FaDownload } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const titles = [
  "Programmer",
  "Web Developer", 
  "Tech Enthusiast",
];

const Hero = () => {
  const email = 'erdipratama18@gmail.com';
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero"
      data-testid="hero-section"
      itemScope
      itemType="https://schema.org/Person"
    >

      <div className="hero-text">
        <p className="intro">Hello,</p>
        <h1 itemProp="name">I'm Erdi Pratama</h1>
        <div className="job-title-container">
          <h2 className="job-title" itemProp="jobTitle">
            {titles[titleIndex]}
          </h2>
        </div>
        <p className="welcome">
          Selamat datang! Saya <span className="highlight-name">Erdi Pratama.</span> Saya suka bikin website, dan belajar hal baru. Saya orangnya teliti, rapi, dan gampang kerja sama. Juga paham Microsoft Office dan beberapa framework kekinian.
        </p>
        <div className="contact-cta">
          <div className="contact-links">
            <a
              href="/files/erdi-pratama-cv.pdf"
              download="Erdi Pratama - CV.pdf"
              className="contact-button cv-button"
            >
              <FaDownload className="contact-icon" />
              Download CV
            </a>

              <Link
                to="/contact"
                className="contact-button email-button"
                aria-label="Contact page"
              >
                <FaEnvelope className="contact-icon" />
                Contact Me
              </Link>

          </div>
        </div>
      </div>
      <div className="hero-img">
        <img
          src={avatar}
          alt="Erdi Pratama - Fullstack Developer"
          width="220"
          height="220"
          loading="eager"
          decoding="async"
          itemProp="image"
        />
      </div>
    </section>
  );
};

export default Hero;