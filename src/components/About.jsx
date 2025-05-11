import profilePicture from '../assets/profile-picture.png'
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import '../styles/About.css'

function About() {
  return (
    <header>
      <div className="header-jumbotron">
        <div className="about-content">
          <div className="about-text">
            <h3>ABOUT ME</h3>
            <p>Halo! Saya Erdi Pratama, mahasiswa Teknik Informatika yang saat ini sedang menempuh pendidikan di STMIK Mardira Indonesia. Portofolio ini dibuat sebagai bagian dari tugas kuliah sekaligus upaya untuk mendokumentasikan perkembangan skill dan proyek yang telah saya kerjakan selama perkuliahan.</p>
            <div className='socialMedia'>
              <a href="https://www.instagram.com/rditamaa/"><FaInstagram /></a>
              <a href="https://wa.me/6283867550225"><FaWhatsapp /></a>
              <a href="https://www.tiktok.com/@erdipratamaa"><FaTiktok /></a>
            </div>
          </div>
          <img src={profilePicture} alt="Profile" />
        </div>
      </div>
    </header>
  )
}

export default About