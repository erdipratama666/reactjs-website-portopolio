import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import SEO from './SEO';
import '../styles/About.css';

function About() {
  const socialLinks = (
    <div className='socialMedia' itemProp="sameAs">
      <a 
        href="https://www.instagram.com/rditamaa" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a 
        href="https://wa.me/6283867550225" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a 
        href="https://www.tiktok.com/@erdipratamaa" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="TikTok"
      >
        <FaTiktok />
      </a>
    </div>
  );

  return (
    <>
      <SEO
        title="About | Erdi Pratama"
        description="Tentang Erdi Pratama, Mahasiswa & Web Developer yang aktif di pengembangan web modern."
        url="/" // Perbaikan: gunakan url="/" untuk canonical section
      />
      <section
        id="about"
        className="about-section"
        itemScope
        itemType="https://schema.org/Person"
      >
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h1 itemProp="name">Erdi Pratama</h1>
              <h2>About Me</h2>
              <p itemProp="description">
                Hai, saya <span itemProp="name">Erdi Pratama</span>! <span itemProp="jobTitle">Mahasiswa & Web Developer</span> yang sedang menekuni bidang pengembangan web (web development). Saat ini, saya aktif mempelajari berbagai teknologi seperti <span itemProp="knowsAbout">HTML, CSS, JavaScript</span>, dan framework modern untuk membangun website yang fungsional dan menarik. Saya sangat tertarik dengan dunia pemrograman dan selalu bersemangat untuk mengasah kemampuan coding saya. Selain kuliah, saya juga mengerjakan proyek kecil-kecilan untuk memperdalam pemahaman tentang front-end dan back-end development.
              </p>
              {socialLinks}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
