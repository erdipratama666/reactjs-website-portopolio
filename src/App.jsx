import { HelmetProvider, Helmet } from 'react-helmet-async';
import './App.css';
// Import Home secara normal karena ini adalah komponen utama yang menampilkan konten LCP
import Home from './pages/Home';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Erdi Pratama | Web Developer</title>
        <meta name="description" content="Portofolio Erdi Pratama, Web Developer dengan React.js" />
        {/* Preload font jika Anda menggunakan custom font */}
        {/* <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
        
        {/* Preconnect ke domain penting jika ada */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        
        {/* Inline critical CSS jika memungkinkan */}
        <style type="text/css">{`
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10rem 8rem 15rem;
  background-color: #000000;
  color: white;
  flex-wrap: wrap;
  gap: 2rem;
}

.hero-text {
  max-width: 600px;
}
        `}</style>
      </Helmet>
      <Home />
    </HelmetProvider>
  );
}

export default App;