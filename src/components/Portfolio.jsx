import SEO from './SEO';
import '../styles/Portfolio.css';
import projectData from '../data/projectData';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <>
      <SEO
        title="Portfolio | Erdi Pratama"
        description="Kumpulan projek website karya Erdi Pratama, termasuk website sekolah, aplikasi web, dan lainnya."
        url="/portfolio"
      />
      <section id="portfolio">
        <div className="portfolio-header">
          <h3 className="section-title">Portfolio</h3>
        </div>
        
        <div className="portfolio-content">
          <div className="project-list">
            {projectData.map((project, index) => (
              <div 
                key={project.id} 
                className="project"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image-container">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                </div>
                
                <div className="project-content">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-actions">
                    <Link to={`/portfolio/${project.id}`} className="project-button-link">
                      <span>Detail Projek</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="bg-decoration bg-decoration-1"></div>
        <div className="bg-decoration bg-decoration-2"></div>
        <div className="bg-decoration bg-decoration-3"></div>
      </section>
    </>
  );
};

export default Portfolio;