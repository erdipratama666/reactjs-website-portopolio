import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import './App.css';

import Home from './pages/Home';
import Tugas from './components/Tugas';
import DetailTugas from './components/DetailTugas';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Erdi Pratama | Web Developer</title>
        <meta name="description" content="Portofolio Erdi Pratama, Web Developer dengan React.js" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tugas" element={<Tugas />} />
        <Route path="/tugas/:id" element={<DetailTugas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
