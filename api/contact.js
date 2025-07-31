// api/contact.js
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
    try {
      const { nama, nohp, email, deskripsi } = req.body;
      
      // Validasi input
      if (!nama || !email || !deskripsi) {
        return res.status(400).json({ 
          success: false,
          message: 'Nama, email, dan deskripsi wajib diisi.' 
        });
      }
      
      // Validasi email format (basic)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          success: false,
          message: 'Format email tidak valid.' 
        });
      }
      
      // Log data yang diterima
      console.log('Data kontak diterima:', { 
        nama, 
        nohp,
        email, 
        deskripsi,
        timestamp: new Date().toISOString()
      });
      
      // Di sini Anda bisa menambahkan logika untuk:
      // - Mengirim email menggunakan service seperti SendGrid, Nodemailer, dll
      // - Menyimpan ke database
      // - Integrasi dengan service lain
      
      return res.status(200).json({ 
        success: true,
        message: 'Pesan berhasil dikirim!' 
      });
      
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ 
        success: false,
        message: 'Terjadi kesalahan server.' 
      });
    }
  }
  
  // Method tidak diizinkan
  return res.status(405).json({ 
    success: false,
    message: 'Metode tidak diizinkan.' 
  });
}