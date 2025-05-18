import React, { useEffect } from 'react';
import '../styles/Experience.css';

function Experience() {
  const experienceData = [
    {
      title: "Content Creator",
      company: "Zamal Collection",
    },
    {
      title: "Coming Soon",
      company: "Coming Soon",
    },
    {
      title: "Coming Soon",
      company: "Coming Soon",
    },
  ];

  useEffect(() => {
    const titleElement = document.querySelector('#experience h3');

    if (titleElement) {
      const styleEl = document.createElement('style');

      styleEl.textContent = `
        #experience h3::after {
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
    <section id="experience">
      <div className="wrapper">
        <h3>Experience</h3>
        <ul className="experience-list">
          {experienceData.map((job, index) => (
            <li className="experience-item" key={index}>
              <h4>{job.title}</h4>
              <p className="position">{job.company}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
