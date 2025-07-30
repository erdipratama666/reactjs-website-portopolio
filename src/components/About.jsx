import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEO from './SEO';
import '../styles/About.css';
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaBirthdayCake,
  FaGraduationCap
} from "react-icons/fa";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  const jsonLdAbout = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Erdi Pratama",
    "alternateName": "Erdi",
    "birthDate": "2003-10-23",
    "jobTitle": "Web Developer",
    "url": "https://www.erdipratama.my.id/about",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "STMIK Mardira Indonesia"
    },
    "sameAs": [
      "https://www.instagram.com/rditamaa",
      "https://github.com/erdipratama666",
      "https://www.linkedin.com/in/erdi-pratama/"
    ]
  };

  return (
    <>
      <SEO
        title="Tentang Saya | Erdi Pratama"
        description="Profil lengkap Erdi Pratama, seorang Web Developer yang fokus pada pengembangan website menggunakan HTML, CSS, dan JavaScript. Saat ini menempuh studi di STMIK Mardira Indonesia."
        url="/about"
      />
      <script type="application/ld+json">
        {JSON.stringify(jsonLdAbout)}
      </script>

      <main
        id="about"
        className="about-section"
        itemScope
        itemType="https://schema.org/Person"
      >
        <article className="about-container">
          <div className="about-content">
            <div className="about-main-box" data-aos="fade-up">
              <div className="about-text">
                <h1 itemProp="headline" data-aos="fade-down" data-aos-delay="200">
                  Tentang Saya
                </h1>
                <p itemProp="description" data-aos="fade-up" data-aos-delay="400">
                  Hai, saya <span itemProp="name">Erdi Pratama</span>, seorang <span itemProp="jobTitle">mahasiswa Sistem Informasi</span> di STMIK Mardira Indonesia sekaligus <strong>Web Developer</strong> yang fokus di bidang pengembangan web.
                  Saya memiliki ketertarikan besar terhadap dunia teknologi informasi, khususnya dalam membangun website menggunakan <span itemProp="knowsAbout">HTML</span>, <span itemProp="knowsAbout">CSS</span>, <span itemProp="knowsAbout">JavaScript</span>, dan framework modern seperti React.js.
                </p>
                <p data-aos="fade-up" data-aos-delay="600">
                  Saya terbiasa mengerjakan proyek website, menyusun dokumen, dan laporan keuangan. Dengan latar belakang pendidikan dari SDN Pasawahan 03, SMPN 43 Bandung, hingga SMAN 1 Bojongsoang, saya tumbuh sebagai pribadi yang teliti, terorganisir, dan mampu bekerja sama dengan baik.
                </p>
                <p data-aos="fade-up" data-aos-delay="800">
                  Di waktu luang, saya senang belajar hal-hal baru dalam dunia programming. Bagi saya, belajar tidak berhenti di teori saja — praktik nyata dan pengalaman langsung adalah kunci untuk menciptakan solusi digital yang bermanfaat dan berdampak.
                </p>

                <div className="about-social" data-aos="fade-up" data-aos-delay="1000">
                  <a href="https://www.instagram.com/rditamaa" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-aos="zoom-in" data-aos-delay="1200">
                    <FaInstagram size={24} />
                  </a>
                  <a href="https://github.com/erdipratama666" target="_blank" rel="noopener noreferrer" aria-label="Github" data-aos="zoom-in" data-aos-delay="1400">
                    <FaGithub size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/erdi-pratama/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-aos="zoom-in" data-aos-delay="1600">
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            <aside className="bio-info-box" data-aos="fade-left" data-aos-delay="600">
              <div className="bio-info">
                <div className="bio-item" data-aos="fade-right" data-aos-delay="800">
                  <FaBirthdayCake className="bio-icon" />
                  <div>
                    <h3>Tanggal Lahir</h3>
                    <p><span itemProp="birthDate" content="2003-10-23">23 Oktober 2003</span></p>
                  </div>
                </div>
                <div className="bio-item" data-aos="fade-right" data-aos-delay="1000">
                  <FaGraduationCap className="bio-icon" />
                  <div>
                    <h3>Pendidikan</h3>
                    <p itemProp="alumniOf">SDN Pasawahan 03</p>
                    <p itemProp="alumniOf">SMPN 43 Bandung</p>
                    <p itemProp="alumniOf">SMAN 1 Bojongsoang - IPA</p>
                    <p itemProp="alumniOf">STMIK Mardira Indonesia - Sistem Informasi</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </>
  );
}

export default About;
