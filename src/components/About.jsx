import SEO from './SEO';
import '../styles/About.css';
import { FaInstagram, FaGithub, FaLinkedin, FaBirthdayCake, FaGraduationCap } from "react-icons/fa";

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
            <div className="about-main-box">
              <div className="about-text">
                <h1 itemProp="name">ABOUT ME</h1>
                <p itemProp="description">
                  Hai, saya <span itemprop="name">Erdi Pratama</span> seorang <span itemprop="jobTitle">mahasiswa Sistem Informasi</span> di STMIK Mardira Indonesia sekaligus <strong>Web Developer</strong> yang fokus di bidang pengembangan web. 
                  Saya memiliki ketertarikan besar terhadap dunia teknologi informasi, khususnya dalam membangun website yang fungsional dan menarik menggunakan <span itemprop="knowsAbout">HTML, CSS, JavaScript</span>, serta berbagai framework modern.
                </p>
                 <p>
                  Saya terbiasa mengerjakan proyek website, menyusun dokumen, dan laporan keuangan. Dengan latar belakang pendidikan dari SDN Pasawahan 03, SMPN 43 Bandung, hingga SMAN 1 Bojongsoang, saya tumbuh sebagai pribadi yang teliti, terorganisir, dan mampu bekerja sama dengan baik.
                </p>
                <p>
                  Di waktu luang, saya senang belajar hal-hal baru dalam dunia programming. Bagi saya, belajar tidak berhenti di teori saja praktik nyata dan pengalaman langsung adalah kunci untuk menciptakan solusi digital yang bermanfaat dan berdampak.                </p>
                <div className="about-social">
                  <a href="https://www.instagram.com/rditamaa" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram size={24} />
                  </a>
                  <a href="https://github.com/erdipratama666" target="_blank" rel="noopener noreferrer" aria-label="Github">
                    <FaGithub size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/erdi-pratama/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="bio-info-box">
              <div className="bio-info">
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
                    <p>SMAN 1 Bojong Soang - IPA</p>
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