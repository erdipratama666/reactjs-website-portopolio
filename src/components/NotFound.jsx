import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import '../styles/NotFound.css';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 Not Found | Erdi Pratama"
        description="Halaman yang Anda cari tidak ditemukan di website Erdi Pratama."
        url="/"
      />
      <div className="notfound-container">
        <h2 className="notfound-subtitle">Halaman Tidak Ditemukan</h2>
        <p className="notfound-desc">Maaf, halaman yang Anda cari tidak tersedia.</p>
        <Link 
          to="/" 
          className="notfound-btn"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </>
  );
}
