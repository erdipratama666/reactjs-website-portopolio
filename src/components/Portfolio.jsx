import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEO from './SEO';
import '../styles/Portfolio.css';
import projectData from '../data/projectData';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  // Structured Data JSON-LD (optional but good for SEO)
  const jsonLdPortfolio = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Portfolio | Erdi Pratama",
    "description": "Kumpulan projek website karya Erdi Pratama, termasuk website sekolah, aplikasi web, dan lainnya.",
    "mainEntity": projectData.map((project, index) => ({
      "@type": "CreativeWork",
      "name": project.title,
      "position": index + 1,
      "description": project.description,
      "url": `https://www.erdipratama.my.id/portfolio/${project.id}`,
      "image": project.mainImage
    }))
  };

  return (
    <>
      <SEO
        title="Portfolio | Erdi Pratama"
        description="Kumpulan projek website karya Erdi Pratama, termasuk website sekolah, aplikasi web, dan lainnya."
        url="/portfolio"
      />
      <script type="application/ld+json">
        {JSON.stringify(jsonLdPortfolio)}
      </script>

      <main id="portfolio" aria-label="Portfolio Section">
        <section>
          <div className="portfolio-header" data-aos="fade-down">
            <h1 className="section-title">Portfolio</h1>
          </div>

          <div className="portfolio-content">
            <div className="project-list" role="list">
              {projectData.map((project, index) => (
                <article
                  key={project.id}
                  className="project"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  role="listitem"
                  aria-label={`Project ${project.title}`}
                >
                  <div
                    className="project-image-container"
                    data-aos="zoom-in"
                    data-aos-delay={(index * 150) + 100}
                  >
                    <img
                      src={project.mainImage}
                      alt={`Tampilan proyek ${project.title}`}
                      className="project-image"
                      loading="lazy"
                    />
                  </div>

                  <div className="project-content">
                    <h2
                      className="project-title"
                      data-aos="fade-up"
                      data-aos-delay={(index * 150) + 200}
                    >
                      {project.title}
                    </h2>
                    <p
                      className="project-description"
                      data-aos="fade-up"
                      data-aos-delay={(index * 150) + 300}
                    >
                      {project.description}
                    </p>

                    <div
                      className="project-actions"
                      data-aos="fade-up"
                      data-aos-delay={(index * 150) + 400}
                    >
                      <Link
                        to={`/portfolio/${project.id}`}
                        className="project-button-link"
                        aria-label={`Lihat detail projek ${project.title}`}
                      >
                        <span>Detail Projek</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
