import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import SEO from './SEO';
import tugasData from '../data';
import '../styles/Tugas.css';

export default function Tugas() {
  const tugasList = Object.values(tugasData).map((tugas) => ({
    id: tugas.id,
    title: `Tugas ${tugas.id}: ${tugas.title}`
  }));

  return (
    <>
      <SEO
        title="Daftar Tugas | Erdi Pratama"
        description="Kumpulan tugas kuliah Erdi Pratama, materi logika first order dan lainnya."
        url="/tugas"
      />
      <Navbar />
      <div className="tugas-container">
        <h1 className="tugas-heading">Daftar Tugas</h1>
        <div className="tugas-grid">
          {tugasList.map((tugas) => (
            <Link
              key={tugas.id}
              to={`/tugas/${tugas.id}`}
              className="tugas-card"
            >
              <h2 className="tugas-title">{tugas.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
