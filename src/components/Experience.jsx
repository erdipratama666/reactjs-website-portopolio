import React, { useEffect } from 'react';
import SEO from './SEO';
import '../styles/Experience.css';

function Experience() {
  const experienceData = [
    {
      title: "Content Creator",
      company: "Zamal Collection",
    },
    {
      title: "Documentation",
      company: "Project MA AS-Siroji",
    },
    {
      title: "Administration",
      company: "Karang Taruna",
    },
  ];

  useEffect(() => {
    const titleElement = document.querySelector('#experience h2');

    if (titleElement) {
      const styleEl = document.createElement('style');

      styleEl.textContent = `
        #experience h2::after {
          content: none !important;
          display: none !important;
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
        url="/experience"
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
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Experience;
