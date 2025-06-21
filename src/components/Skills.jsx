import '../styles/Skills.css';
import React, { useState } from 'react';
import SEO from './SEO';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaMicrosoft, FaGithub, FaLanguage 
} from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';

function Skills() {
  const [activeTab, setActiveTab] = useState('tech');

  const techStack = [
    { name: 'HTML', icon: <FaHtml5 size={24} /> },
    { name: 'CSS', icon: <FaCss3Alt size={24} /> },
    { name: 'JavaScript', icon: <FaJs size={24} /> },
    { name: 'React', icon: <FaReact size={24} /> }
  ];

  const softSkills = [
    { name: 'Word', icon: <FaMicrosoft size={24} /> }, 
    { name: 'Excel', icon: <FaMicrosoft size={24} /> },
    { name: 'Github', icon: <FaGithub size={24} /> }
  ];

  const languages = [
    { name: 'English', icon: <IoLanguage size={24} /> },
    { name: 'Bahasa Indonesia', icon: <FaLanguage size={24} /> }
  ];

  const handleTabChange = (tab) => setActiveTab(tab);

  const renderSkills = () => {
    switch (activeTab) {
      case 'tech': return techStack;
      case 'soft': return softSkills;
      case 'lang': return languages;
      default: return techStack;
    }
  };

  return (
    <>
      <SEO
        title="Skills | Erdi Pratama"
        description="Daftar skills Erdi Pratama, meliputi technical skills, soft skills, dan bahasa yang dikuasai."
        url="/"
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
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;