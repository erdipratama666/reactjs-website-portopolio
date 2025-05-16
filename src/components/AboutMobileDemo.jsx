import React from 'react';
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import '../styles/About.jsx.css';

function AboutMobileDemo() {
  return (
    <div className="phone-mockup">
      <div className="phone-screen">
        {/* About Section Mobile */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-content">
              <div className="about-text">
                <h3>About Me</h3>
                <p>
                  Hai, saya Erdi Pratama!
                  <br /><br />
                  Saya seorang mahasiswa yang sedang menekuni bidang pengembangan web (web development). 
                  Saat ini, saya aktif mempelajari berbagai teknologi.
                </p>
                <div className='socialMedia'>
                  <a href="#instagram" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#whatsapp" aria-label="WhatsApp">
                    <FaWhatsapp />
                  </a>
                  <a href="#tiktok" aria-label="TikTok">
                    <FaTiktok />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section Mobile */}
        <section className="skills-section">
          <div className="section-title-container">
            <h2 className="section-title">Skills</h2>
          </div>

          <div className="tabs">
            <button className="active">Technical</button>
            <button>Soft Skills</button>
            <button>Languages</button>
          </div>

          <div className="skills-grid">
            <div className="skill-card">HTML</div>
            <div className="skill-card">CSS</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">React</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutMobileDemo;

// CSS for the demo
const styles = `
.phone-mockup {
  width: 300px;
  height: 600px;
  background-color: #111;
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0 0 50px rgba(0,0,0,0.3);
  margin: 40px auto;
  position: relative;
  overflow: hidden;
}

.phone-screen {
  background-color: #000;
  height: 100%;
  width: 100%;
  border-radius: 25px;
  overflow-y: auto;
  position: relative;
}

.FaInstagram, .FaWhatsapp, .FaTiktok {
  color: white;
}
`;