import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  // Fungsi untuk navigasi dan scroll ke id
  const handleScrollTo = (id) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      // Jika bukan di home, navigasi dulu ke home lalu scroll dengan delay
      navigate(`/#${id}`);
    } else {
      // Jika sudah di home, scroll langsung
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav role="navigation" className="navbar">
      <div className="wrapper">
        <div className="logo-container">
          <div className="logo">
            <p className="byline">ERDI PRATAMA</p>
          </div>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <button className="link-button" onClick={() => handleScrollTo('about')}>
                About
              </button>
            </li>
            <li>
              <button className="link-button" onClick={() => handleScrollTo('experience')}>
                Experience
              </button>
            </li>
            <li>
              <button className="link-button" onClick={() => handleScrollTo('portfolio')}>
                Portfolio
              </button>
            </li>
            <li>
              <Link to="/tugas" onClick={() => setMenuOpen(false)}>
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
