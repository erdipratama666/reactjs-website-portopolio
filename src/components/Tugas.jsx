import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';
import '../styles/Tugas.css'; 

export default function Tugas() {
  const tugasList = [
    { id: '1', title: 'Tugas 1: Logika First Order' },
    { id: '2', title: 'Tugas 2: Coming Soon' },
    { id: '3', title: 'Tugas 3: Coming Soon' },
    { id: '4', title: 'Tugas 4: Coming Soon' },
  ];

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
              <h2 className="tugas-title">
                {tugas.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}