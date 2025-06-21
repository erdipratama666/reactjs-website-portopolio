import SEO from './SEO';
import '../styles/About.css';
import { FaInstagram, FaTiktok, FaGithub, FaBirthdayCake, FaGraduationCap, FaDownload } from "react-icons/fa";

function About() {
  return (
    <>
      <SEO
        title="About | Erdi Pratama"
        description="Fullstack Developer."
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
            {/* Kotak 1: About Me, Paragraf, Download CV, Sosial Media */}
            <div className="about-main-box">
              <div className="about-text">
                <h1 itemProp="name">ABOUT ME</h1>
                <p itemProp="description">
                  Hai, saya <span itemProp="name">Erdi Pratama</span>! <span itemProp="jobTitle">Mahasiswa & Fullstack Developer</span> yang sedang menekuni bidang pengembangan web. Saat ini, saya aktif mempelajari berbagai teknologi seperti <span itemProp="knowsAbout">HTML, CSS, JavaScript</span>, dan framework modern untuk membangun website yang fungsional dan menarik.
                </p>

                {/* Tambahkan tombol Download CV di sini */}
                <div className="download-cv">
                  <a 
                    href="/files/cv-erdi-pratama.pdf" 
                    download="CV-Erdi-Pratama.pdf"
                    className="cv-button"
                  >
                    <FaDownload className="download-icon" />
                    Download CV
                  </a>
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

            {/* Kotak 2: Tanggal Lahir & Pendidikan */}
            <div className="bio-info-box">
              <div className="bio-info">
                {/* ...bio-item tanggal lahir & pendidikan... */}
                <div className="bio-item">
                  <FaBirthdayCake className="bio-icon" />
                  <div>
                    <h3>Tanggal Lahir</h3>
                    <p>23 Oktober 2003</p>
                  </div>
                </div>
                
                <div className="bio-item">
                  <FaGraduationCap className="bio-icon" />
                  <div>
                    <h3>Pendidikan</h3>
                    <p>SDN Pasawahan 03</p>
                    <p>SMPN 43 Bandung</p>
                    <p>SMAN 1 Bojong Soang</p>
                    <p>STMIK Mardira Indonesia - Sistem Informasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;