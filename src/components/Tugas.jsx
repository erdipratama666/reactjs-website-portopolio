import { Link } from 'react-router-dom';
// import './Tugas.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Tugas() {
  const tugasList = [
    { id: '1', title: 'Tugas 1: Logika First Order' },
    { id: '2', title: 'Tugas 2: Menuliskan Ekspresi dalam Logika' },
    { id: '3', title: 'Tugas 3: Konversi Kalimat ke Logika' },
    { id: '4', title: 'Tugas 4: Pembuktian dengan Logika First Order' },
    // Tambahkan tugas lainnya di sini
  ];

  return (
    <>
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