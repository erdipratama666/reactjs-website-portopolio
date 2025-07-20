const tugas2 = {
  id: '2',
  title: 'Analisis Jurnal: Sistem Pakar Penentuan Bakat Anak dengan Metode Forward Chaining',
  sections: [
    {
      title: '1. Identifikasi Problem',
      content: [
        {
          type: 'paragraph',
          text: 'Penelitian ini mengangkat permasalahan penting dalam dunia pendidikan anak usia dini:'
        },
        {
          type: 'list-title',
          text: 'Masalah utama yang dihadapi:'
        },
        {
          type: 'list',
          items: [
            'Masih banyak orang tua dan guru yang belum mengetahui bakat pada anak mereka',
            'Terbatasnya jumlah pakar untuk berkonsultasi tentang bakat anak',
            'Kurang lebih 40% anak berbakat tidak mampu berprestasi sesuai kemampuan (Lucy)',
            'Anak berbakat tergolong sebagai underachiever karena tidak teridentifikasi'
          ]
        },
        {
          type: 'paragraph',
          text: 'Target penelitian: Anak TK usia 4-6 tahun karena merupakan masa penting untuk meletakkan dasar bagi perkembangan di masa dewasa (Santrock dan Yussen).'
        }
      ]
    },
    {
      title: '2. Metodologi dan Cara Penyelesaian',
      content: [
        {
          type: 'paragraph',
          text: 'Penelitian menggunakan sistem pakar dengan metode forward chaining untuk mengatasi keterbatasan pakar manusia.'
        },
        {
          type: 'list-title',
          text: 'Tahapan penelitian:'
        },
        {
          type: 'ordered-list',
          items: [
            'Tahap Inisialisasi: Identifikasi masalah melalui wawancara dengan pakar psikologi anak, guru TK, orang tua, dan studi pustaka',
            'Tahap Analisa dan Perancangan: Analisa kriteria setiap bakat, penentuan variabel, dan pembuatan rule',
            'Tahap Implementasi dan Pengujian: Pembuatan sistem pakar dan pengujian akurasi dengan 100 data sampel'
          ]
        },
        {
          type: 'list-title',
          text: 'Alasan pemilihan Forward Chaining:'
        },
        {
          type: 'list',
          items: [
            'Teknik inferensi bottom-up reasoning yang terbukti sukses',
            'Dimulai dari data/fakta yang ada menuju kesimpulan',
            'Data menentukan aturan mana yang harus dijalankan',
            'Cocok untuk sistem identifikasi berbasis gejala/indikator'
          ]
        }
      ]
    },
    {
      title: '3. Knowledge Base dan Struktur Sistem',
      content: [
        {
          type: 'paragraph',
          text: 'Sistem menggunakan standar bakat anak menurut US Office Of Education (USOE) America.'
        },
        {
          type: 'list-title',
          text: 'Enam kategori bakat USOE America:'
        },
        {
          type: 'list',
          items: [
            'K1: Intelektual Umum (14 variabel)',
            'K2: Akademik Khusus (11 variabel)', 
            'K3: Berpikir Kreatif-Produktif (23 variabel)',
            'K4: Kemampuan Memimpin (14 variabel)',
            'K5: Bidang Seni dan Pertunjukan (7 variabel)',
            'K6: Kemampuan Psikomotor (14 variabel)'
          ]
        },
        {
          type: 'list-title',
          text: 'Komponen knowledge base:'
        },
        {
          type: 'list',
          items: [
            '27 indikator bakat',
            '83 variabel pengujian',
            '33 rules untuk inferensi',
            'Contoh rule: if C1 and C2 and C3 then I1'
          ]
        }
      ]
    },
    {
      title: '4. Implementasi dan Antarmuka Sistem',
      content: [
        {
          type: 'list-title',
          text: 'Komponen sistem yang dibangun:'
        },
        {
          type: 'list',
          items: [
            'Form identifikasi bakat anak untuk input variabel',
            'Inference engine dengan algoritma forward chaining',
            'Knowledge base berisi 33 rules',
            'Form hasil identifikasi untuk menampilkan output'
          ]
        },
        {
          type: 'list-title',
          text: 'Cara kerja sistem:'
        },
        {
          type: 'ordered-list',
          items: [
            'Pengguna memilih variabel sesuai kondisi anak',
            'Sistem melakukan inferensi menggunakan forward chaining',
            'Rules dijalankan berdasarkan variabel yang dipilih',
            'Hasil identifikasi kategori bakat ditampilkan'
          ]
        }
      ]
    },
    {
      title: '5. Evaluasi dan Validasi Sistem',
      content: [
        {
          type: 'paragraph',
          text: 'Pengujian dilakukan untuk mengukur akurasi sistem pakar yang dikembangkan.'
        },
        {
          type: 'list-title',
          text: 'Metode evaluasi:'
        },
        {
          type: 'list',
          items: [
            'Sampel: 100 data anak dari TK Negeri Pembina II Pekanbaru',
            'Perbandingan hasil deteksi sistem vs pakar manusia',
            'Rumus akurasi: (Jumlah Benar / Jumlah Data) × 100%',
            'Pengukuran efektivitas forward chaining'
          ]
        },
        {
          type: 'conclusion',
          text: 'Hasil: Sistem berhasil mengidentifikasi bakat anak dan mesin inferensi forward chaining terbukti efektif untuk standar USOE America.'
        }
      ]
    },
    {
      title: '6. Kelebihan dan Keterbatasan',
      content: [
        {
          type: 'list-title',
          text: 'Kelebihan sistem:'
        },
        {
          type: 'list',
          items: [
            'Menggunakan standar internasional USOE America',
            'Mengatasi keterbatasan jumlah pakar manusia',
            'Fokus pada usia kritis 4-6 tahun',
            'Sistem komprehensif dengan 6 kategori bakat',
            'Implementasi forward chaining yang terbukti efektif',
            'Dapat diakses kapan saja tanpa terbatas waktu konsultasi'
          ]
        },
        {
          type: 'list-title',
          text: 'Keterbatasan sistem:'
        },
        {
          type: 'list',
          items: [
            'Hanya untuk anak usia 4-6 tahun (TK)',
            'Memerlukan input manual 83 variabel',
            'Akurasi sangat bergantung keakuratan input pengguna',
            'Belum ada validasi lintas budaya di luar Amerika',
            'Tidak dapat menangani kasus ambiguitas atau borderline'
          ]
        }
      ]
    },
    {
      title: '7. Kontribusi dan Implikasi Penelitian',
      content: [
        {
          type: 'list-title',
          text: 'Kontribusi teoritis:'
        },
        {
          type: 'list',
          items: [
            'Implementasi forward chaining dalam psikologi anak',
            'Adaptasi standar USOE America untuk konteks Indonesia',
            'Pengembangan knowledge base komprehensif bakat anak'
          ]
        },
        {
          type: 'list-title',
          text: 'Kontribusi praktis:'
        },
        {
          type: 'list',
          items: [
            'Solusi praktis untuk identifikasi bakat anak',
            'Alat bantu untuk orang tua dan guru TK',
            'Pencegahan underachievement pada anak berbakat',
            'Dasar untuk program pendidikan yang sesuai bakat'
          ]
        },
        {
          type: 'conclusion',
          text: 'Sistem ini dapat menjadi alat bantu efektif dalam pengembangan potensi anak sejak usia dini dan mendukung program pendidikan yang lebih personal dan sesuai dengan bakat masing-masing anak.'
        }
      ]
    }
  ]
};

export default tugas2;