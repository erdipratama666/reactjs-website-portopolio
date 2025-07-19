import { useParams, useNavigate } from 'react-router-dom';
import tugasData from '../tugasData';
import Navbar from './Navbar';
import SEO from './SEO';
import '../styles/DetailTugas.css';

function DetailTugas() {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentTugas = tugasData[id];

  if (!currentTugas) {
    return (
      <>
        <SEO
          title="Tugas Tidak Ditemukan | Erdi Pratama"
          description="Halaman tugas yang Anda cari tidak ditemukan."
          url={`/tugas/${id}`}
        />
        <Navbar />
        <main className="detail-container">
          <h1 className="detail-heading">Tugas tidak ditemukan</h1>
          <button onClick={() => navigate('/tugas')} className="back-button">
            ← Kembali ke Daftar Tugas
          </button>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`Tugas ${id}: ${currentTugas.title} | Erdi Pratama`}
        description={`Detail tugas ${currentTugas.title} oleh Erdi Pratama.`}
        url={`/tugas/${id}`}
      />
      <Navbar />
      <main className="detail-container">
        <h1 className="detail-heading">
          Tugas {id}: {currentTugas.title}
        </h1>

        {/* Tampilkan semua section termasuk Tugas 3 */}
        {currentTugas.sections?.map((section, index) => (
          <section key={index} className="detail-section">
            <h2 className="section-heading">{section.title}</h2>
            {section.content?.map((item, contentIndex) => {
              if (item.type === 'paragraph') {
                return <p key={contentIndex}>{item.text}</p>;
              } else if (item.type === 'list-title') {
                return (
                  <p key={contentIndex}>
                    <strong>{item.text}</strong>
                  </p>
                );
              } else if (item.type === 'list') {
                return (
                  <ul key={contentIndex}>
                    {item.items?.map((listItem, listIndex) => (
                      <li key={listIndex}>{listItem}</li>
                    ))}
                  </ul>
                );
              } else if (item.type === 'ordered-list') {
                return (
                  <ol key={contentIndex}>
                    {item.items?.map((listItem, listIndex) => (
                      <li key={listIndex}>{listItem}</li>
                    ))}
                  </ol>
                );
              } else if (item.type === 'conclusion') {
                return (
                  <p key={contentIndex} className="detail-conclusion">
                    {item.text}
                  </p>
                );
              }
              return null;
            })}
          </section>
        ))}

        {/* LINK SECTION */}
        {currentTugas.link && (
          <div className="detail-section">
            <h2 className="section-heading">Link Terkait</h2>
            <p>
              <a
                href={currentTugas.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button"
              >
                Kunjungi Website Sistem Pakar
              </a>
            </p>
          </div>
        )}

        <button onClick={() => navigate('/tugas')} className="back-button">
          ← Kembali ke Daftar Tugas
        </button>
      </main>
    </>
  );
}

export default DetailTugas;
