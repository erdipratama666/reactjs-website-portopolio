const tugas2 = {
  id: '2',
  title: 'Analisis Jurnal Sistem Pakar Penentuan Bakat Anak dengan Forward Chaining',
  sections: [
    {
      title: 'Identifikasi Problem',
      content: [
        {
          type: 'paragraph',
          text: 'Kurangnya pengetahuan orang tua dan guru tentang bakat anak-anak mereka. Keterbatasan jumlah pakar yang dapat dikonsultasi. 40% anak berbakat tidak mampu berprestasi sesuai kemampuan. Identifikasi bakat pada usia dini penting untuk pengembangan.'
        }
      ]
    },
    {
      title: 'Cara Penyelesaian',
      content: [
        {
          type: 'paragraph',
          text: 'Menggunakan sistem pakar dengan metode forward chaining yang cocok untuk penarikan kesimpulan dari data menuju kesimpulan. Melalui tiga tahap: inisialisasi, analisa dan perancangan, implementasi dan pengujian.'
        }
      ]
    },
    {
      title: 'Knowledge Base',
      content: [
        {
          type: 'paragraph',
          text: 'Menggunakan standar USOE America dengan 6 kategori bakat: Intelektual Umum, Akademik Khusus, Berpikir Kreatif dan Produktif, Kepemimpinan, Seni Visual dan Pertunjukan, Psikomotorik. Terdiri atas 27 indikator, 83 variabel, dan 33 rules.'
        }
      ]
    },
    {
      title: 'Implementasi',
      content: [
        {
          type: 'paragraph',
          text: 'Sistem memiliki form input untuk memilih variabel, inference engine dengan forward chaining, dan knowledge base 33 rules. Output berupa hasil identifikasi bakat anak. Validasi dilakukan dengan 100 sampel dari TK Negeri Pembina II Pekanbaru.'
        }
      ]
    },
    {
      title: 'Kelebihan dan Keterbatasan',
      content: [
        {
          type: 'paragraph',
          text: 'Kelebihan: standar internasional, metode efektif, fokus usia kritis, komprehensif, mengatasi keterbatasan pakar. Keterbatasan: terbatas usia 4-6 tahun, input manual banyak, belum ada validasi lintas budaya, akurasi bergantung input pengguna.'
        }
      ]
    },
    {
      title: 'Kontribusi Penelitian',
      content: [
        {
          type: 'paragraph',
          text: 'Memberikan solusi praktis identifikasi bakat anak, mengimplementasikan forward chaining di psikologi anak, membantu orang tua dan guru, serta mencegah underachievement.'
        }
      ]
    }
  ]
};

export default tugas2;
