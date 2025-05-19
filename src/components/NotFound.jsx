import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 Not Found | Erdi Pratama"
        description="Halaman yang Anda cari tidak ditemukan di website Erdi Pratama."
        url="/"
      />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-600 mb-8">Maaf, halaman yang Anda cari tidak tersedia.</p>
        <Link 
          to="/" 
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </>
  );
}