import '../styles/Skills.css';
import React, { useState } from 'react';
import SEO from './SEO';

const techStack = ['HTML', 'CSS', 'JavaScript', 'React'];
const softSkills = ['Word', 'Excel', 'Github'];
const languages = ['English', 'Bahasa Indonesia'];

function Skills() {
  const [activeTab, setActiveTab] = useState('tech');

  const handleTabChange = (tab) => setActiveTab(tab);

  const renderSkills = () => {
    switch (activeTab) {
      case 'tech':
        return techStack;
      case 'soft':
        return softSkills;
      case 'lang':
        return languages;
      default:
        return techStack;
    }
  };

  return (
    <>
      <SEO
        title="Skills | Erdi Pratama"
        description="Daftar skills Erdi Pratama, meliputi technical skills, soft skills, dan bahasa yang dikuasai."
        url="/" // Perbaikan: gunakan url="/" untuk canonical section
      />
      <section className="skills-section" id="skills">
        <div className="section-title-container">
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="tabs">
          <button
            className={activeTab === 'tech' ? 'active' : ''}
            onClick={() => handleTabChange('tech')}
          >
            Technical
          </button>
          <button
            className={activeTab === 'soft' ? 'active' : ''}
            onClick={() => handleTabChange('soft')}
          >
            Soft Skills
          </button>
          <button
            className={activeTab === 'lang' ? 'active' : ''}
            onClick={() => handleTabChange('lang')}
          >
            Languages
          </button>
        </div>

        <div className="skills-grid">
          {renderSkills().map((skill, i) => (
            <div className="skill-card" key={i}>
              {skill}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
