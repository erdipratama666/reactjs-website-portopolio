import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import './App.css';

import Home from './pages/Home';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Tugas from './components/Tugas';
import DetailTugas from './components/DetailTugas';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import DetailBlog from './components/DetailBlog'; // tambahkan import ini

function App() {
  return (
    <Router>
      <Helmet>
        <title>Erdi Pratama | Web Developer</title>
        <meta name="description" content="Portofolio Erdi Pratama, Web Developer dengan React.js" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<DetailBlog />} /> {/* Route untuk DetailBlog */}
        <Route path="/tugas" element={<Tugas />} />
        <Route path="/tugas/:id" element={<DetailTugas />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;