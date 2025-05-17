import '../components/Tugas'
import '../components/DetailTugas'
import { Link } from 'react-router-dom';

export default function Tugas() {
  const tugasList = [
    { path: '/tugas/Tugas1', title: 'Tugas 1: Logika First Order' },
    //{ path: '/tugas/Tugas2', title: 'Tugas 2: Menuliskan Ekspresi dalam Logika' },
   //{ path: '/tugas/3', title: 'Tugas 3: Konversi Kalimat ke Logika' },//
    //{ path: '/tugas/4', title: 'Tugas 4: Konversi Kalimat ke Logika' },//
    // Tambahkan tugas lainnya di sini
  ];

  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Daftar Tugas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tugasList.map((tugas, index) => (
          <Link
            key={index}
            to={tugas.path}
            className="block border border-gray-300 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 bg-white hover:bg-blue-50"
          >
            <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors text-center md:text-left">
              {tugas.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}