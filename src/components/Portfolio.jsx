import SEO from './SEO';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "MA AS-Siroji",
      description: "Website MA As Siroji menyajikan informasi akademik dan non-akademik...",
      image: "/screenshots/ma-assiroji.jpg",
      liveUrl: "https://www.maassiroji.sch.id/",
      codeUrl: "https://github.com/username/ma-assiroji", // jika open source
      technologies: ["Next.js", "React", "Supabase", "CSS3"],
      features: ["PPDB Online", "Galeri Dinamis", "Sistem Berita", "Responsive Design"]
    }
    // Tambahkan project lainnya
  ];

  return (
    <>
      <SEO 
        title="Portfolio | Erdi Pratama"
        description="Kumpulan projek website karya Erdi Pratama, termasuk website sekolah, aplikasi web, dan lainnya."
        url="/"
         />
      <section id="portfolio">
        <h3 className="section-title">Portfolio</h3>
        <div className="portfolio-content">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={`${project.title} preview`} />
              </div>
              <div className="project-info">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;