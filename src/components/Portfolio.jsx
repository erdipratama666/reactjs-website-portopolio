import SEO from './SEO';
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <>
      <SEO
        title="Portfolio | Erdi Pratama"
        description="Kumpulan projek website karya Erdi Pratama, termasuk website sekolah, aplikasi web, dan lainnya."
        url="/" // Perbaiki: jangan gunakan hash di canonical url
      />
      <section id="portfolio">
        <h3 
          className="section-tittle" 
          style={{ color: '#000000' }}
        >
          Portfolio
        </h3>
        <div className="portfolio-content">
          <div className="project-list">
            <div className="project">
              <h2 className="project-title">MA AS-Siroji</h2>
              <p className="project-description">
                Website MA As Siroji menyajikan informasi akademik dan non-akademik, termasuk publikasi berita, PPDB online, galeri kegiatan, kalender akademik, dan profil sekolah, dengan tampilan responsif dan mudah diakses di berbagai perangkat.
              </p>
              <a 
                href="https://www.maassiroji.sch.id/" 
                target="_blank"
                rel="noopener noreferrer"
                className="project-button-link"
              >
                Lihat Projek
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;