import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h3>About Me</h3>
            <p>Hai, saya Erdi Pratama!
Saya seorang mahasiswa yang sedang menekuni bidang pengembangan web (web development). Saat ini, saya aktif mempelajari berbagai teknologi seperti HTML, CSS, JavaScript, dan framework modern untuk membangun website yang fungsional dan menarik.

Saya sangat tertarik dengan dunia pemrograman dan selalu bersemangat untuk mengasah kemampuan coding saya. Selain kuliah, saya juga mengerjakan proyek kecil-kecilan untuk memperdalam pemahaman tentang front-end dan back-end development.</p>
            <div className='socialMedia'>
              <a href="https://www.instagram.com/rditamaa" aria-label="Instagram">
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