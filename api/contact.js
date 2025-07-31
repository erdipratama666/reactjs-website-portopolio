// api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    });
  }

  const { nama, nohp, email, deskripsi } = req.body;

  // Validasi input
  if (!nama || !email || !deskripsi) {
    return res.status(400).json({ 
      success: false,
      message: 'Nama, email, dan deskripsi harus diisi' 
    });
  }

  // Validasi email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Format email tidak valid'
    });
  }

  try {
    // Konfigurasi Nodemailer untuk Gmail
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Verify transporter
    await transporter.verify();

    // Template email yang lebih modern dan responsive
    const emailTemplate = `
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pesan Baru dari Website Portfolio</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; background: #f8f9fa; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white; }
          .header h1 { font-size: 28px; font-weight: 300; margin-bottom: 10px; }
          .content { padding: 30px; background: white; }
          .info-box { background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px; border-left: 4px solid #667eea; }
          .message-box { background: white; padding: 25px; border-radius: 10px; border: 1px solid #e9ecef; border-left: 4px solid #28a745; }
          .btn { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 20px auto; }
          .timestamp { background: #343a40; color: #adb5bd; padding: 20px; text-align: center; font-size: 14px; }
          @media (max-width: 600px) {
            .container { margin: 0; }
            .header, .content { padding: 20px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 Pesan Baru dari Website</h1>
            <p>Portfolio Erdi Pratama</p>
          </div>
          
          <div class="content">
            <div class="info-box">
              <h2 style="color: #333; margin-bottom: 15px;">👤 Informasi Pengirim</h2>
              <p><strong>Nama:</strong> ${nama}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #667eea;">${email}</a></p>
              <p><strong>No HP:</strong> ${nohp || 'Tidak dicantumkan'}</p>
            </div>
            
            <div class="message-box">
              <h2 style="color: #333; margin-bottom: 15px;">💬 Pesan</h2>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; white-space: pre-line;">
${deskripsi}
              </div>
            </div>
            
            <div style="text-align: center;">
              <a href="mailto:${email}" class="btn">📧 Balas Email</a>
            </div>
          </div>
          
          <div class="timestamp">
            <p><strong>📅 Dikirim pada:</strong> ${new Date().toLocaleString('id-ID', {
              timeZone: 'Asia/Jakarta',
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })} WIB</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const autoReplyTemplate = `
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Terima Kasih - Erdi Pratama</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; background: #f8f9fa; }
          .header { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); padding: 30px; text-align: center; color: white; }
          .content { padding: 30px; background: white; }
          .success-icon { background: #28a745; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 24px; }
          .message-summary { background: #e7f3ff; padding: 20px; border-radius: 10px; border-left: 4px solid #0066cc; margin: 20px 0; }
          .cta-buttons { text-align: center; margin: 30px 0; }
          .btn { display: inline-block; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 0 5px; }
          .btn-whatsapp { background: #25D366; color: white; }
          .btn-portfolio { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
          .footer { background: #343a40; color: #adb5bd; padding: 25px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Terima Kasih ${nama}! 🙏</h1>
            <p>Pesan Anda telah berhasil dikirim</p>
          </div>
          
          <div class="content">
            <div style="text-align: center; margin-bottom: 25px;">
              <div class="success-icon">✅</div>
              <h2 style="color: #333;">Pesan Berhasil Diterima!</h2>
            </div>
            
            <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
              <p style="color: #555; margin-bottom: 15px;">
                Halo <strong>${nama}</strong>,
              </p>
              <p style="color: #555; margin-bottom: 15px;">
                Terima kasih telah menghubungi saya melalui website portfolio. Pesan Anda telah saya terima dan akan saya respon dalam <strong>1-2 hari kerja</strong>.
              </p>
              <p style="color: #555;">
                Jika ada yang urgent, Anda juga bisa menghubungi saya langsung via WhatsApp di <strong>+62 838 6755 0225</strong>.
              </p>
            </div>
            
            <div class="message-summary">
              <h3 style="color: #0066cc; margin-bottom: 15px;">📝 Ringkasan Pesan Anda:</h3>
              <div style="background: white; padding: 15px; border-radius: 8px; white-space: pre-line;">
${deskripsi}
              </div>
            </div>
            
            <div class="cta-buttons">
              <a href="https://wa.me/6283867550225" class="btn btn-whatsapp">💬 WhatsApp</a>
              <a href="${process.env.VERCEL_URL || 'https://your-domain.com'}" class="btn btn-portfolio">🌐 Kunjungi Portfolio</a>
            </div>
          </div>
          
          <div class="footer">
            <p style="font-weight: bold; color: white; margin-bottom: 10px;">Erdi Pratama</p>
            <p style="margin-bottom: 15px;">Fullstack Developer | React.js • Node.js • JavaScript</p>
            <p style="font-size: 12px; opacity: 0.7;">
              Bandung, Jawa Barat • ${new Date().getFullYear()}
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Email ke Anda
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'erdipratama18@gmail.com',
      subject: `🚀 Pesan Baru dari ${nama} - Website Portfolio`,
      html: emailTemplate,
      replyTo: email
    };

    // Auto-reply ke pengirim
    const autoReplyOptions = {
      from: `"Erdi Pratama - Fullstack Developer" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Terima kasih ${nama} - Pesan Anda telah diterima! 🚀`,
      html: autoReplyTemplate
    };

    // Kirim kedua email secara bersamaan
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions)
    ]);

    console.log('✅ Email sent successfully to:', email);

    res.status(200).json({ 
      success: true,
      message: 'Pesan berhasil dikirim! Terima kasih.' 
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ 
      success: false,
      message: 'Gagal mengirim pesan. Silakan coba lagi.' 
    });
  }
}