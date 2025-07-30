import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Skills.css';
import React from 'react';
import SEO from './SEO';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub
} from 'react-icons/fa';
import {
  SiNextdotjs, SiVuedotjs, SiTailwindcss, SiMysql, SiPostgresql
} from 'react-icons/si';

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

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
    { name: 'GitHub', icon: <FaGithub size={24} color="#24292e" /> }
  ];

  const skillNames = skills.map(skill => skill.name);

  const jsonLdSkills = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Skills Erdi Pratama",
    "itemListElement": skillNames.map((name, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": name
    }))
  };

  return (
    <>
      <SEO
        title="Skills | Erdi Pratama"
        description="Daftar kemampuan teknis Erdi Pratama, meliputi HTML, CSS, JavaScript, React.js, Vue.js, Next.js, Tailwind CSS, serta database seperti MySQL dan PostgreSQL."
        url="/skills"
      />
      <script type="application/ld+json">
        {JSON.stringify(jsonLdSkills)}
      </script>

      <main className="skills-section" id="skills" aria-label="Skills Section">
        <article>
          <div className="section-title-container" data-aos="fade-down">
            <h2 className="section-title">Skills</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div
                className="skill-card"
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                role="listitem"
                aria-label={skill.name}
              >
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}

export default Skills;
