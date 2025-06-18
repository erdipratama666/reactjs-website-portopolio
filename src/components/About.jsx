import SEO from './SEO';
import '../styles/About.css';
import { FaInstagram, FaTiktok, FaGithub, FaBirthdayCake, FaGraduationCap } from "react-icons/fa";

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
                Hai, saya <span itemProp="name">Erdi Pratama</span>! <span itemProp="jobTitle">Mahasiswa & Web Developer</span> yang sedang menekuni bidang pengembangan web (web development). Saat ini, saya aktif mempelajari berbagai teknologi seperti <span itemProp="knowsAbout">HTML, CSS, JavaScript</span>, dan framework modern untuk membangun website yang fungsional dan menarik.
              </p>
              
              {/* Tambahan Info Biodata */}
              <div className="bio-info">
                <div className="bio-item">
                  <FaBirthdayCake className="bio-icon" />
                  <div>
                    <h3>Tanggal Lahir</h3>
                    <p>23 Oktober 2003</p> {/* Ganti dengan tanggal lahir asli */}
                  </div>
                </div>
                
                <div className="bio-item">
                  <FaGraduationCap className="bio-icon" />
                  <div>
                    <h3>Pendidikan</h3>
                    <p>SDN Pasawahan 03</p>
                    <p>SMPN 43 Bandung</p>
                    <p>SMAN 1 Bojong Soang</p>
                    <p>STMIK Mardira Indonesia - Sistem Informasi</p> {/* Ganti dengan info pendidikan */}
                  </div>
                </div>
              </div>
              
              <div className="about-social">
                <a href="https://www.instagram.com/rditamaa" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.tiktok.com/@erdipratamaa" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <FaTiktok size={24} />
                </a>
                <a href="https://github.com/erdipratama666" target="_blank" rel="noopener noreferrer" aria-label="Github">
                  <FaGithub size={24} />
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