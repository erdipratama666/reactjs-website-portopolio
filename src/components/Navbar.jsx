import React, { useState, useEffect } from 'react'; 
import '../styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };
  
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);
  
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
        </button>
        
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;