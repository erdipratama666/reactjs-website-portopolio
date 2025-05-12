import { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
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
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;