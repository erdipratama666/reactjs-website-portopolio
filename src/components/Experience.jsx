import React, { useEffect } from 'react';
import '../styles/Experience.css';

function Experience() {
  const experienceData = [
    {
      title: "Content Creator",
      company: "Zamal Collection",
      duration: "2025",
      description: "Creating engaging content for social media platforms.",
    },
    {
      title: "Frontend Developer",
      company: "Creative Dev Studio",
      duration: "2024",
      description: "Developed and maintained responsive web interfaces.",
    },
    {
      title: "UI/UX Designer",
      company: "Visionary Tech",
      duration: "2023",
      description: "Designed user-friendly interfaces for web and mobile apps.",
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
              <p className="duration">{job.duration}</p>
              <p className="description">{job.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;