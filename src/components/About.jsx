import SEO from './SEO';
import '../styles/About.css';
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

function About() {
  return (
    <>
      <SEO
        title="About | Erdi Pratama"
        description="Tentang Erdi Pratama, Mahasiswa & Web Developer yang aktif di pengembangan web modern."
        url="/"
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
              <h1 itemProp="name">ABOUT ME</h1>
              <p itemProp="description">
                Hai, saya <span itemProp="name">Erdi Pratama</span>! <span itemProp="jobTitle">Mahasiswa & Web Developer</span> yang sedang menekuni bidang pengembangan web (web development). Saat ini, saya aktif mempelajari berbagai teknologi seperti <span itemProp="knowsAbout">HTML, CSS, JavaScript</span>, dan framework modern untuk membangun website yang fungsional dan menarik. Saya sangat tertarik dengan dunia pemrograman dan selalu bersemangat untuk mengasah kemampuan coding saya. Selain kuliah, saya juga mengerjakan proyek kecil-kecilan untuk memperdalam pemahaman tentang front-end dan back-end development.
              </p>
              <div className="about-social">
                <a href="https://www.instagram.com/rditamaa" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram size={24} />
                </a>
                <a href="https://wa.me/6283867550225" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp size={24} />
                </a>
                <a href="https://www.tiktok.com/@erdipratamaa" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <FaTiktok size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
