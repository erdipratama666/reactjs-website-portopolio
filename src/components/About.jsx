import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h3>About Me</h3>
            <p>Halo! Perkenalkan nama saya Erdi Pratama</p>
            <div className='socialMedia'>
              <a href="https://www.instagram.com/rditamaa/" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/6283867550225" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://www.tiktok.com/@erdipratamaa" aria-label="TikTok">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;