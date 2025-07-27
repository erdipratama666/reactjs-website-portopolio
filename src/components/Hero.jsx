import avatar from '../assets/profile-picture.webp';
import { FaEnvelope, FaDownload } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const titles = [
  "Web Developer",
  "Mobile Developer", 
  "Fullstack Developer",
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
          Selamat datang di portofolio saya! Saya <span className="highlight-name">Erdi Pratama</span> yang sangat antusias menciptakan solusi web inovatif dan mewujudkan ide-ide menjadi nyata melalui kode.
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