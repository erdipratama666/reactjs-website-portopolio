import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import projectData from '../data/projectData';
import SEO from './SEO';
import '../styles/ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);

  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-not-found">
        <div className="not-found-content">
          <div className="not-found-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <h2>Projek tidak ditemukan</h2>
          <p>Maaf, projek yang Anda cari tidak tersedia.</p>
          <button onClick={() => navigate('/portfolio')} className="back-button">
            ← Kembali ke Portfolio
          </button>
        </div>
      </div>
    );
  }

  const handleImageLoad = () => setImageLoading(false);

  const nextImage = () =>
    setSelectedImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));

  const prevImage = () =>
    setSelectedImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));

  return (
    <>
      <SEO
        title={`${project.title} | Erdi Pratama`}
        description={project.description}
        url={`/portfolio/${project.id}`}
        image={project.images?.[0]}
      />
      <div className="project-detail-wrapper">
        <div className="project-detail-container">
          <div className="breadcrumb">
            <button onClick={() => navigate('/portfolio')} className="breadcrumb-link">
              Portfolio
            </button>
            <span className="breadcrumb-separator">→</span>
            <span className="breadcrumb-current">{project.title}</span>
          </div>

          <h1 className="project-hero-title">{project.title}</h1>
          <div className="project-meta">
            <span className="meta-item">Web Project</span>
            <span className="meta-item">{project.images?.length || 1} Gambar</span>
          </div>

          {project.images && project.images.length > 0 && (
            <div className="project-gallery">
              <h3 className="gallery-title">Galeri Projek</h3>
              <div className="gallery-main">
                <div className="main-image-container">
                  {imageLoading && (
                    <div className="image-loading">
                      <div className="loading-spinner"></div>
                    </div>
                  )}
                  <img
                    src={project.images[selectedImage]}
                    alt={`${project.title} ${selectedImage + 1}`}
                    className="main-image"
                    onLoad={handleImageLoad}
                    style={{ opacity: imageLoading ? 0 : 1 }}
                  />
                  {project.images.length > 1 && (
                    <>
                      <button className="gallery-nav gallery-prev" onClick={prevImage}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="15,18 9,12 15,6" />
                        </svg>
                      </button>
                      <button className="gallery-nav gallery-next" onClick={nextImage}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="9,18 15,12 9,6" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
                {project.images.length > 1 && (
                  <div className="gallery-thumbnails">
                    {project.images.map((img, index) => (
                      <button
                        key={index}
                        className={`thumbnail ${index === selectedImage ? 'active' : ''}`}
                        onClick={() => {
                          setSelectedImage(index);
                          setImageLoading(true);
                        }}
                      >
                        <img src={img} alt={`Thumbnail ${index + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="project-content">
            <div className="content-section">
              <h3 className="section-title">Tentang Projek</h3>
              <p className="project-description">{project.description}</p>
            </div>

            <div className="project-actions">
              <div className="action-buttons">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-button primary"
                >
                  Kunjungi Website
                </a>
                <button
                  onClick={() => navigate('/portfolio')}
                  className="action-button secondary"
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
