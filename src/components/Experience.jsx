import { useEffect } from 'react';
import Navbar from './Navbar';
import SEO from './SEO';
import '../styles/Experience.css';

function Experience() {
  const experienceData = [
    {
      title: "Content Creator",
      company: "Zamal Collection",
      duration: "Jan 2025 - Mar 2025",
      date: "Jan 2025 - Mar 2025",
      role: "Content Creator",
      icon: "📱",
      description: "Mengelola konten media sosial untuk meningkatkan brand awareness dan engagement. Membuat strategi konten yang menarik dan sesuai dengan target audience.",
      details: [
        "Membuat konten visual dan video untuk Instagram dan TikTok",
        "Menganalisis performa konten dan engagement rate",
        "Berkolaborasi dengan tim marketing untuk strategi promosi",
        "Meningkatkan follower hingga 25% dalam 3 bulan"
      ]
    },
    {
      title: "Documentation",
      company: "Project MA AS-Siroji",
      duration: "Okt 2024 - Jan 2025",
      date: "Okt 2024 - Jan 2025", 
      role: "Documentation Specialist",
      icon: "📋",
      description: "Bertanggung jawab untuk pembuatan laporan proyek, dokumentasi kegiatan, dan penyusunan arsip digital yang terstruktur dan mudah diakses.",
      details: [
        "Menyusun dokumentasi lengkap progress proyek mingguan",
        "Mengelola arsip digital dengan sistem kategorisasi yang efisien",
        "Membuat laporan evaluasi dan rekomendasi perbaikan",
        "Koordinasi dengan berbagai stakeholder untuk kelengkapan data"
      ]
    },
    {
      title: "Administration",
      company: "Karang Taruna",
      duration: "Jun 2020 - Present",
      date: "Jun 2020 - Present",
      role: "Administrative Officer",
      icon: "👥",
      description: "Mengelola administrasi anggota dalam kegiatan masyarakat, mengorganisir acara komunitas, dan membantu dalam program pemberdayaan pemuda.",
      details: [
        "Mengelola database anggota dan kegiatan organisasi",
        "Mengkoordinasikan kegiatan sosial dan pemberdayaan masyarakat",
        "Menyusun proposal kegiatan dan laporan pertanggungjawaban",
        "Memfasilitasi program pelatihan skill untuk pemuda lokal"
      ]
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Experience | Erdi Pratama"
        description="Pengalaman kerja dan organisasi Erdi Pratama sebagai Content Creator, Dokumentasi, dan Administrasi."
        url="/experience"
      />
      <Navbar />
      <main className="experience-page">
        <div className="container">
          <div className="experience-wrapper">
            <h2 className="experience-title">Pengalaman Kerja</h2>
            <div className="timeline">
              {experienceData.map((job, index) => (
                <div 
                  className="timeline-element" 
                  key={index}
                  itemScope
                  itemType="https://schema.org/WorkExperience"
                >
                  <span className="date" itemProp="datePosted">{job.date}</span>
                  <h3 className="role" itemProp="jobTitle">
                    <span className="timeline-icon">{job.icon}</span>
                    {job.role}
                  </h3>
                  <h4 className="company" itemProp="hiringOrganization">
                    {job.company}
                  </h4>
                  <p className="description" itemProp="description">
                    {job.description}
                  </p>
                  <ul className="details-list">
                    {job.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Experience;