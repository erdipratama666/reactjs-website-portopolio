import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    nama: '',
    nohp: '',
    email: '',
    deskripsi: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pesan berhasil dikirim!');
    setForm({ nama: '', nohp: '', email: '', deskripsi: '' });
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-header">
            <h1>Hubungi Kami</h1>
            <p>Kami siap membantu Anda. Silakan isi form di bawah ini atau hubungi kami langsung.</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Informasi Kontak</h3>
              <div className="info-item">
                <h4>Alamat</h4>
                <p>Kp. Leuwimelang rt02 rw06<br />Bandung, Jawa Barat 40238</p>
              </div>
              <div className="info-item">
                <h4>Telepon</h4>
                <p>+62 838 6755 0225</p>
              </div>
              <div className="info-item">
                <h4>Email</h4>
                <p>erdipratama18@gmail.com</p>
              </div>
              <div className="info-item">
                <h4>Jam Operasional</h4>
                <p>Senin - Jumat: 08:00 - 17:00<br />Sabtu: 08:00 - 12:00</p>
              </div>
            </div>
            <div className="contact-form-container">
              <h3>Kirim Pesan</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
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
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;