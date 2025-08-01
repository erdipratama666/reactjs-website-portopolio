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
      date: "2025-01 - 2025-03",
      role: "Content Creator",
      icon: "📱",
      details: [
        "Membuat konten visual dan video untuk Instagram dan TikTok.",
        "Menganalisis performa konten.",
        "Berkolaborasi dengan tim untuk strategi promosi.",
        "Meningkatkan jumlah view serta followers."
      ]
    },
    {
      title: "Documentation",
      company: "Project MA AS-Siroji",
      duration: "Okt 2024 - Jan 2025",
      date: "2024-10 - 2025-01",
      role: "Documentation Specialist",
      icon: "📋",
      details: [
        "Menyusun dokumentasi lengkap progres proyek mingguan.",
        "Mengelola arsip digital yang efisien.",
        "Koordinasi dengan berbagai tim untuk kelengkapan data.",
        "Membuat laporan evaluasi dan rekomendasi perbaikan.",
        "Menyusun makalah untuk memenuhi tugas."
      ]
    },
    {
      title: "Administration",
      company: "Karang Taruna",
      duration: "Jun 2020 - Present",
      date: "2020-06 - Present",
      role: "Administrative Officer",
      icon: "👥",
      details: [
        "Mencatat dan mengelola transaksi keuangan organisasi secara akurat.",
        "Membuat laporan keuangan bulanan.",
        "Menyusun anggaran kegiatan sosial dan pelaporan kepada pengurus."
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
                  <meta itemProp="startDate" content={job.date.split(' - ')[0]} />
                  <meta itemProp="endDate" content={job.date.split(' - ')[1]} />
                  <span className="date">{job.duration}</span>
                  <h3 className="role" itemProp="jobTitle">
                    <span className="timeline-icon">{job.icon}</span>
                    {job.role}
                  </h3>
                  <h4 className="company" itemProp="hiringOrganization">{job.company}</h4>
                  <ul className="details-list">
                    {job.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
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
