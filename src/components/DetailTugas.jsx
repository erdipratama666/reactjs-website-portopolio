import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/DetailTugas.css'; 

export default function DetailTugas() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const tugasDetails = {
    '1': {
      title: 'Logika First Order dan Contoh Kasusnya',
      sections: [
        {
          title: '1. Pelajari Logika First Order dan Contoh Kasusnya',
          content: [
            {
              type: 'paragraph',
              text: 'Pengertian: Logika First Order (First Order Logic/FOL) adalah sistem logika yang menggunakan predikat, kuantor, dan variabel untuk menyatakan fakta tentang objek di dunia nyata.'
            },
            {
              type: 'list-title',
              text: 'Ciri-ciri utama:'
            },
            {
              type: 'list',
              items: [
                'Memiliki kuantor universal (∀) dan eksistensial (∃)',
                'Menyatakan sifat objek dengan predikat (misalnya: Manusia(x))',
                'Digunakan dalam AI, basis data, sistem pakar, dll'
              ]
            },
            {
              type: 'list-title',
              text: 'Contoh kasus:'
            },
            {
              type: 'list',
              items: [
                '∀x (Demam(x) ∧ Batuk(x) → Flu(x)) → Semua yang demam dan batuk menderita flu',
                '∀x (Anggota(x) → ∃y (Meminjam(x, y))) → Setiap anggota perpustakaan meminjam setidaknya satu buku'
              ]
            }
          ]
        },
        {
          title: '2. Menuliskan Ekspresi dalam Logika First Order',
          content: [
            {
              type: 'list-title',
              text: 'Pernyataan yang diberikan:'
            },
            {
              type: 'list',
              items: [
                'Semua mahasiswa informatika suka kecerdasan buatan',
                'Setiap yang paham pemrograman suka kecerdasan buatan'
              ]
            },
            {
              type: 'paragraph',
              text: 'Kesimpulan: Semua mahasiswa ilmu komputer paham pemrograman'
            },
            {
              type: 'list-title',
              text: 'Notasi:'
            },
            {
              type: 'list',
              items: [
                'M(x): x adalah mahasiswa informatika',
                'C(x): x suka kecerdasan buatan',
                'P(x): x paham pemrograman',
                'K(x): x adalah mahasiswa ilmu komputer'
              ]
            },
            {
              type: 'list-title',
              text: 'Terjemahan dalam FOL:'
            },
            {
              type: 'list',
              items: [
                '∀x (M(x) → C(x))',
                '∀x (P(x) → C(x))'
              ]
            },
            {
              type: 'paragraph',
              text: 'Kesimpulan: ∀x (K(x) → P(x))'
            },
            {
              type: 'paragraph',
              text: 'Evaluasi Kesimpulan: Tidak valid. Kita hanya tahu bahwa dua kelompok berbeda (mahasiswa informatika dan yang paham pemrograman) menyukai hal yang sama, yaitu kecerdasan buatan. Tidak ada hubungan logis yang membuktikan bahwa mahasiswa ilmu komputer paham pemrograman hanya dari dua premis di atas.'
            }
          ]
        },
        {
          title: '3. Konversi Kalimat ke Logika First Order dan Pembuktian',
          content: [
            {
              type: 'list-title',
              text: 'Pernyataan yang diberikan:'
            },
            {
              type: 'list',
              items: [
                'Setiap apel atau pear adalah buah',
                'Setiap buah memiliki warna kuning atau hijau atau merah',
                'Tidak ada pear berwarna merah',
                'Setiap buah manis tidak berwarna hijau'
              ]
            },
            {
              type: 'list-title',
              text: 'Notasi:'
            },
            {
              type: 'list',
              items: [
                'A(x): x adalah apel',
                'R(x): x adalah pear',
                'B(x): x adalah buah',
                'W(x,y): x berwarna y',
                'S(x): x manis'
              ]
            },
            {
              type: 'list-title',
              text: 'Terjemahan dalam FOL:'
            },
            {
              type: 'list',
              items: [
                '∀x ((A(x) ∨ R(x)) → B(x))',
                '∀x (B(x) → (W(x,kuning) ∨ W(x,hijau) ∨ W(x,merah)))',
                '∀x (R(x) → ¬W(x,merah))',
                '∀x ((B(x) ∧ S(x)) → ¬W(x,hijau))'
              ]
            },
            {
              type: 'paragraph',
              text: 'Pernyataan yang ingin dibuktikan: Jika pear tidak kuning maka pear tidak manis'
            },
            {
              type: 'paragraph',
              text: 'Dalam logika: ∀x (R(x) ∧ ¬W(x,kuning) → ¬S(x))'
            },
            {
              type: 'list-title',
              text: 'Pembuktian langkah demi langkah:'
            },
            {
              type: 'ordered-list',
              items: [
                'Asumsikan x adalah pear dan tidak kuning → R(x) ∧ ¬W(x,kuning)',
                'Dari (1): pear adalah buah → B(x)',
                'Dari (2): karena buah harus berwarna kuning, hijau, atau merah, dan pear tidak boleh merah (3), dan tidak kuning → maka W(x,hijau)',
                'Dari (4): jika buah berwarna hijau → tidak manis → W(x,hijau) → ¬S(x)',
                'Karena pear berwarna hijau → pear tidak manis'
              ]
            },
            {
              type: 'conclusion',
              text: 'Kesimpulan: ✅ Pernyataan "Jika pear tidak kuning maka pear tidak manis" adalah BENAR dan terbukti logis dari premis yang ada.'
            }
          ]
        }
      ]
    },
    '2': {
      title: 'Coming Soon',
      sections: [
        {
          title: '1. Coming Soon',
          content: [
            {
              type: 'paragraph',
              text: 'Coming Soon'
            }
          ]
        }
      ]
    },
    '3': {
      title: 'Coming Soon',
      sections: [
        {
          title: '1.Coming Soon',
          content: [
            {
              type: 'paragraph',
              text: 'Coming Soon.'
            }
          ]
        }
      ]
    },
    '4': {
      title: 'Coming Soon',
      sections: [
        {
          title: '1. Coming Soon',
          content: [
            {
              type: 'paragraph',
              text: 'Coming Soon.'
            }
          ]
        }
      ]
    }
  };
  
  const currentTugas = tugasDetails[id];
  
  if (!currentTugas) {
    return (
      <>
        <Navbar />
        <div className="detail-container">
          <h2 className="detail-heading">Tugas tidak ditemukan</h2>
          <button
            onClick={() => navigate('/tugas')}
            className="back-button"
          >
            ← Kembali ke Daftar Tugas
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="detail-container">
        <h2 className="detail-heading">Tugas {id}: {currentTugas.title}</h2>
        
        {currentTugas.sections.map((section, index) => (
          <div key={index} className="detail-section">
            <h3 className="section-heading">{section.title}</h3>
            
            {section.content.map((item, contentIndex) => {
              if (item.type === 'paragraph') {
                return <p key={contentIndex} className="detail-paragraph">{item.text}</p>;
              } else if (item.type === 'list-title') {
                return <p key={contentIndex} className="detail-list-title"><strong>{item.text}</strong></p>;
              } else if (item.type === 'list') {
                return (
                  <ul key={contentIndex} className="detail-list">
                    {item.items.map((listItem, listIndex) => (
                      <li key={listIndex}>{listItem}</li>
                    ))}
                  </ul>
                );
              } else if (item.type === 'ordered-list') {
                return (
                  <ol key={contentIndex} className="detail-ordered-list">
                    {item.items.map((listItem, listIndex) => (
                      <li key={listIndex}>{listItem}</li>
                    ))}
                  </ol>
                );
              } else if (item.type === 'conclusion') {
                return <p key={contentIndex} className="detail-conclusion">{item.text}</p>;
              }
              return null;
            })}
          </div>
        ))}
        
        <div className="back-button-container">
          <button
            onClick={() => navigate('/tugas')}
            className="back-button"
          >
            ← Kembali ke Daftar Tugas
          </button>
        </div>
      </div>
    </>
  );
}