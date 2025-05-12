import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1 className="section-title">Portfolio</h1>
      
      <div className="portfolio-content">
        <div className="project-list">
          <div className="project">
            <h2 className="project-title">MA AS-Shiroji</h2>
            <p className="project-description">
              Website MA As Shiroji menyajikan informasi akademik dan non-akademik, termasuk publikasi berita, PPDB online, galeri kegiatan, kalender akademik, dan profil sekolah, dengan tampilan responsif dan mudah diakses di berbagai perangkat.
            </p>
            <button className="project-button">Lihat Projek</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;