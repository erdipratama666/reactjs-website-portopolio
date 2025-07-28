const tugas2 = {
  id: '2',
  title: 'Sistem Pakar untuk Identifikasi Bakat Anak Usia Dini Menggunakan Forward Chaining',
  authors: [
    'ADE HUSNI MUBAROQ   22110002',
    'ERDI PRATAMA   22110026',
    'GHALIH R   22110035',
    'MUHAMMAD NATHAN F   22110051'
  ],
  sections: [
    {
      title: 'BAB I',
      content: [
        {
          type: 'section',
          title: '1.1 Latar Belakang',
          text: 'Masa kanak-kanak usia 4–6 tahun adalah masa emas perkembangan anak. Banyak potensi anak tidak dikenali karena keterbatasan pemahaman orang tua/guru dan kurangnya tenaga ahli. Sekitar 40% anak berbakat tidak berprestasi optimal. Teknologi seperti sistem pakar diperlukan untuk membantu proses identifikasi bakat yang akurat dan efisien.'
        },
        {
          type: 'section',
          title: '1.2 Rumusan Masalah',
          items: [
            'Bagaimana cara kerja sistem pakar dalam mengidentifikasi bakat anak?',
            'Apa saja komponen utama dalam sistem pakar?',
            'Bagaimana sistem pakar membantu orang tua dan guru?',
            'Metode apa yang digunakan dalam sistem berbasis gejala ini?'
          ]
        },
        {
          type: 'section',
          title: '1.3 Tujuan Penulisan',
          items: [
            'Menjelaskan konsep dasar sistem pakar dalam identifikasi bakat anak.',
            'Mendeskripsikan rancangan sistem pakar untuk mengenali bakat anak.',
            'Memberikan gambaran pemanfaatan sistem dalam pendidikan.'
          ]
        }
      ]
    },
    {
      title: 'BAB II',
      content: [
        {
          type: 'section',
          title: '2.1 Pengertian',
          text: 'Sistem pakar adalah sistem komputer yang meniru pemikiran seorang ahli. Komponennya: basis pengetahuan, mesin inferensi, dan antarmuka pengguna.'
        },
        {
          type: 'section',
          title: '2.2 Tujuan dan Sasaran Sistem',
          text: 'Membantu identifikasi bakat anak usia 4–6 tahun secara sistematis dan terukur, fokus pada aspek kognitif, sosial, motorik, dan kreativitas.'
        },
        {
          type: 'section',
          title: '2.3 Metode Forward Chaining',
          text: 'Metode inferensi bottom-up. Dimulai dari fakta/data menuju kesimpulan. Cocok untuk sistem berbasis aturan seperti ini.'
        },
        {
          type: 'section',
          title: '2.4 Kategori dan Indikator Bakat',
          list: [
            '1. Intelektual Umum',
            '2. Akademik Khusus',
            '3. Berpikir Kreatif dan Produktif',
            '4. Kepemimpinan',
            '5. Seni Visual dan Pertunjukan',
            '6. Psikomotorik'
          ]
        },
        {
          type: 'section',
          title: '2.5 Struktur Sistem dan Komponen',
          items: [
            'Antarmuka pengguna untuk input perilaku anak',
            'Mesin inferensi menggunakan forward chaining',
            'Basis pengetahuan berisi: 27 indikator, 83 variabel, 33 aturan',
            'Contoh rule: IF C1 AND C2 AND C3 → THEN I1'
          ]
        }
      ]
    },
    {
      title: 'BAB III',
      content: [
        {
          type: 'section',
          title: '3.1 Proses dan Validasi Sistem',
          text: 'Input data perilaku anak diproses dengan forward chaining untuk menemukan kategori bakat. Validasi dilakukan dengan 100 data dari TK di Pekanbaru, hasilnya menunjukkan akurasi tinggi.'
        },
        {
          type: 'section',
          title: '3.2 Kelebihan dan Keterbatasan',
          subSections: {
            kelebihan: [
              'Menggunakan standar internasional USOE',
              'Fokus pada anak usia dini',
              'Mampu mengenali 6 kategori bakat'
            ],
            keterbatasan: [
              'Hanya untuk anak usia 4–6 tahun',
              'Input data masih manual dan kompleks',
              'Belum diuji pada budaya berbeda',
              'Akurasi tergantung input pengguna'
            ]
          }
        },
        {
          type: 'section',
          title: '3.3 Kontribusi Penelitian',
          items: [
            'Membantu guru/orang tua mengenali potensi anak',
            'Mencegah kegagalan prestasi anak berbakat',
            'Memberikan dasar untuk intervensi lebih cepat dan tepat'
          ]
        }
      ]
    },
    {
      title: 'BAB IV',
      content: [
        {
          type: 'section',
          title: '4.1 Kesimpulan',
          text: 'Sistem pakar dengan metode forward chaining efektif membantu identifikasi bakat anak secara terstruktur. Meskipun masih ada tantangan seperti validasi budaya dan kompleksitas input, sistem ini berpotensi besar dalam mendukung pendidikan anak usia dini.'
        },
        {
          type: 'section',
          title: '4.2 Saran',
          text: 'Pengembangan sistem perlu melibatkan psikolog profesional, menyimpan riwayat hasil untuk evaluasi jangka panjang, dan dapat mengolah data secara personal.'
        }
      ]
    }
  ]
};

export default tugas2;
