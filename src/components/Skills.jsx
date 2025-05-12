import React, { useState } from 'react';
import '../styles/Skills.css';

const techStack = ['HTML', 'CSS', 'Javascript', 'Laravel', 'ReactJS'];

function Skills() {
  const [activeTab, setActiveTab] = useState('tech');

  return (
    <section className="skills-section">
      <div className="section-title-container">
        <h2 className="section-title"></h2>
      </div>
      <div className="skills-grid">
        {activeTab === 'tech' && techStack.map((item, i) => (
          <div className="skill-card" key={i}>{item}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

// .skills-grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
//   gap: 1rem;
// }

// .skill-card {
//   border: 1px solid #ffffff;
//   padding: 1rem;
//   text-align: center;
//   border-radius: 8px;
//   font-weight: bold;
// }