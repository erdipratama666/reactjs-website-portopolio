import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const handleScrollTo = (id) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar pro-navbar" role="navigation">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="Home">
          <span className="logo-text">ERDI PRATAMA</span>
        </Link>
        <button
          className={`navbar-hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <button className="navbar-link" onClick={() => handleScrollTo('about')}>
                About
              </button>
            </li>
            <li>
              <button className="navbar-link" onClick={() => handleScrollTo('portfolio')}>
                Portfolio
              </button>
            </li>
            <li>
              <Link to="/experience" className="navbar-link" onClick={() => setMenuOpen(false)}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/blog" className="navbar-link" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-link" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/tugas" className="navbar-link" onClick={() => setMenuOpen(false)}>
                Tugas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
