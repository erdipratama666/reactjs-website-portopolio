import '../styles/Hero.css';
import avatar from '../assets/profile-picture.webp';
// Pastikan Anda sudah memiliki ikon ini atau install package react-icons
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const email = 'erdipratama18@gmail.com';
  const whatsapp = '6283867550225';

  return (
    <section
      className="hero"
      data-testid="hero-section"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="hero-text">
        <p className="intro">Hi, I'm</p>
        <h1 itemProp="name">Erdi Pratama</h1>
        <h2 itemProp="jobTitle">Web Developer & Frontend Specialist</h2>
        
        {/* Tambahkan bagian kontak di sini */}
        <div className="contact-cta">
          <p className="contact-text">Hubungi Saya:</p>
          <div className="contact-links">
            <a 
              href={`mailto:${email}`} 
              className="contact-button email-button"
              aria-label="Send email"
            >
              <FaEnvelope className="contact-icon" />
              Email
            </a>
            <a
              href={`https://wa.me/${whatsapp}`}
              className="contact-button whatsapp-button"
              aria-label="Chat on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="contact-icon" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      <div className="hero-img">
        <img
          src={avatar}
          alt="Erdi Pratama - Web Developer & Frontend Specialist"
          width="220"
          height="220"
          loading="eager"
          decoding="async"
          itemProp="image"
          fetchpriority="high"
        />
      </div>
    </section>
  );
};

export default Hero;