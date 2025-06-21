import '../styles/Hero.css';
import avatar from '../assets/profile-picture.webp';
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
        <h1 itemProp="name">Erdi Pratama</h1>
        <div className="job-title-container">
          <h2 className="job-title" itemProp="jobTitle">
            <span className="title-part">Fullstack Developer</span>
          </h2>
        </div>
        
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
          alt="Erdi Pratama - Fullstack Developer"
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