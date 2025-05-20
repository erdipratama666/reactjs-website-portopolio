import React, { useEffect } from 'react';
import SEO from './SEO';
import '../styles/Experience.css';

function Experience() {
  const experienceData = [
    {
      title: "Content Creator",
      company: "Zamal Collection",
      duration: "Jan 2022 - Present",
      description: "Mengelola konten media sosial dan kampanye digital marketing."
    },
    {
      title: "Documentation",
      company: "Project MA AS-Siroji",
      duration: "Mar 2021 - Nov 2021",
      description: "Bertanggung jawab untuk dokumentasi kegiatan dan pembuatan laporan proyek."
    },
    {
      title: "Administration",
      company: "Karang Taruna",
      duration: "Jun 2020 - Dec 2021",
      description: "Mengelola administrasi dan koordinasi anggota dalam berbagai kegiatan masyarakat."
    },
  ];

  useEffect(() => {
    // Remove default styles for h2 after element
    const titleElement = document.querySelector('.experience-section h2');
    
    if (titleElement) {
      const styleEl = document.createElement('style');
      
      styleEl.textContent = `
        .experience-section h2::after {
          content: "" !important;
        }
      `;
      
      document.head.appendChild(styleEl);
      
      return () => {
        document.head.removeChild(styleEl);
      };
    }
  }, []);

  return (
    <>
      <SEO
        title="Experience | Erdi Pratama"
        description="Pengalaman kerja dan organisasi Erdi Pratama sebagai Content Creator, Dokumentasi, dan Administrasi."
        url="/"
      />
      <section
        id="experience"
        itemScope
        itemType="https://schema.org/ItemList"
        className="experience-section"
      >
        <div className="wrapper">
          <h2 itemProp="name">Experience</h2>
        
          <ul className="experience-list">
            {experienceData.map((job, index) => (
              <li
                className="experience-item"
                key={index}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <h3 itemProp="jobTitle">{job.title}</h3>
                <p className="position" itemProp="name">{job.company}</p>
                <span className="duration">{job.duration}</span>
                <p className="description">{job.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Experience;