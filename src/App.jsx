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
import DetailBlog from './components/DetailBlog';
import Portfolio from './components/Portfolio'; 
import ProjectDetail from './components/ProjectDetail';   

function App() {
  return (
    <Router>
      <Helmet>
        <title>Erdi Pratama | Web Developer</title>
        <meta
          name="description"
          content="Erdi Pratama adalah Web Developer yang berfokus pada pengembangan website dengan JavaScript dan framework modern."
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<DetailBlog />} />
        <Route path="/tugas" element={<Tugas />} />
        <Route path="/tugas/:id" element={<DetailTugas />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;