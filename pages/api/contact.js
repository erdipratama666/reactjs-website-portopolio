export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://www.erdipratama.my.id');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Tangani preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Validasi sederhana (opsional)
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Semua field wajib diisi.' });
    }

    // Simulasi penyimpanan atau pengiriman (bisa disambungkan ke email, database, dsb)
    console.log('Data diterima:', { name, email, message });

    return res.status(200).json({ message: 'Pesan berhasil dikirim!' });
  }

  return res.status(405).json({ message: 'Metode tidak diizinkan.' });
}
