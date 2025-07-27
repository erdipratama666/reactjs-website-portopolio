import '../styles/Skills.css';
import React from 'react';
import SEO from './SEO';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub 
} from 'react-icons/fa';
import { SiNextdotjs, SiVuedotjs, SiTailwindcss, SiMysql, SiPostgresql } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 size={24} color="#e34c26" /> },
    { name: 'CSS', icon: <FaCss3Alt size={24} color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJs size={24} color="#f7df1e" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} color="#38bdf8" /> },
    { name: 'Vue.js', icon: <SiVuedotjs size={24} color="#42b883" /> },
    { name: 'React.js', icon: <FaReact size={24} color="#61dafb" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={24} color="#000" /> },
    { name: 'MySQL', icon: <SiMysql size={24} color="#00758f" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={24} color="#336791" /> },
    { name: 'Github', icon: <FaGithub size={24} color="#24292e" /> }
  ];

  return (
    <>
      <SEO
        title="Skills | Erdi Pratama"
        description="Daftar skills Erdi Pratama, meliputi technical skills dan tools yang dikuasai."
        url="/"
      />
      <section className="skills-section" id="skills">
        <div className="section-title-container">
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
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