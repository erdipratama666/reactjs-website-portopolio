import React from 'react'; // Tambahkan impor React
import { Helmet } from 'react-helmet-async';
import './App.css';
import Home from './pages/Home';

// HelmetProvider harus ditempatkan di file main.jsx
// App.jsx hanya menggunakan komponen Helmet

function App() {
  return (
    <>
      <Helmet>
        <title>Erdi Pratama | Web Developer</title>
        <meta name="description" content="Portofolio Erdi Pratama, Web Developer dengan React.js" />
      </Helmet>
      <Home />
    </>
  );
}

export default App;