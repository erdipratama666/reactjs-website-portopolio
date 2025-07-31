import React, { useState } from 'react';
import Navbar from './Navbar';
import SEO from './SEO';
import '../styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    nama: '',
    nohp: '',
    email: '',
    deskripsi: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      // Gunakan URL relatif, bukan absolute URL
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      let data = {};
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error('Error parsing JSON:', jsonError);
        data = { message: 'Tidak ada response JSON' };
      }

      if (response.ok) {
        setStatus('success');
        setForm({ nama: '', nohp: '', email: '', deskripsi: '' });
        
        // Auto-open WhatsApp dengan data yang sudah diisi
        setTimeout(() => {
          openWhatsApp();
        }, 1000);
      } else {
        setStatus('error');
        console.error('Error response:', data.message);
      }
    } catch (error) {
      setStatus('error');
      console.error('Network error:', error);
    } finally {
      setLoading(false);
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '6283867550225';
    const message = `Halo, saya ${form.nama}.\n\nEmail: ${form.email}\nNo HP: ${form.nohp}\nPesan: ${form.deskripsi}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <SEO 
        title="Kontak | Erdi Pratama"
        description="Hubungi Erdi Pratama untuk konsultasi dan kolaborasi proyek pengembangan website. Tersedia layanan fullstack development dengan React.js, Node.js, dan teknologi modern lainnya."
        keywords="kontak erdi pratama, fullstack developer bandung, jasa pembuatan website, konsultasi web development, react developer indonesia"
        url="/contact"
      />
      <Navbar />
      <main className="contact-page" role="main">
        <div className="contact-container">
          <header className="contact-header">
            <h1>Hubungi Saya</h1>
            <p>Silakan isi formulir di bawah ini atau hubungi langsung melalui kontak yang tersedia.</p>
          </header>

          <div className="contact-content">
            <section className="contact-info" aria-label="Informasi kontak">
              <h2>Informasi Kontak</h2>
              <address>
                <div className="info-item">
                  <strong>Alamat:</strong><br />
                  Kp. Leuwimelang RT02 RW06<br />
                  Bandung, Jawa Barat 40238
                </div>
                <div className="info-item">
                  <strong>Telepon:</strong><br />
                  <a href="tel:+6283867550225">+62 838 6755 0225</a>
                </div>
                <div className="info-item">
                  <strong>Email:</strong><br />
                  <a href="mailto:erdipratama18@gmail.com">erdipratama18@gmail.com</a>
                </div>
                <div className="info-item">
                  <strong>Jam Operasional:</strong><br />
                  Senin - Jumat: 08:00 - 17:00<br />
                  Sabtu: 08:00 - 12:00
                </div>
              </address>
            </section>

            <section className="contact-form-container" aria-label="Formulir kontak">
              <h2>Kirim Pesan</h2>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="nama">Nama Lengkap</label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap Anda"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nohp">Nomor HP</label>
                  <input
                    type="tel"
                    id="nohp"
                    name="nohp"
                    value={form.nohp}
                    onChange={handleChange}
                    placeholder="Contoh: 08123456789"
                    pattern="[0-9]+"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="contoh@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="deskripsi">Pesan</label>
                  <textarea
                    id="deskripsi"
                    name="deskripsi"
                    value={form.deskripsi}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tuliskan pesan Anda di sini..."
                    required
                  ></textarea>
                </div>

                <div className="form-buttons">
                  <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? 'Mengirim...' : 'Kirim Pesan'}
                  </button>
                </div>

                {status === 'success' && (
                  <div className="status-message success" role="alert">
                    ✅ Pesan berhasil dikirim! Anda akan diarahkan ke WhatsApp dalam beberapa detik.
                  </div>
                )}
                {status === 'error' && (
                  <div className="status-message error" role="alert">
                    ❌ Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung melalui WhatsApp.
                  </div>
                )}
              </form>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;