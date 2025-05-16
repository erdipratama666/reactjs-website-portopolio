import React from 'react';
import '../styles/Navbar.jsx.css';

function MobileDemo() {
  return (
    <div className="phone-mockup">
      <div className="phone-screen">
        {/* Navbar Mobile View */}
        <nav className="navbar">
          <div className="wrapper">
            <div className="logo-container">
              <div className="logo">
                <p className="byline">ERDI PRATAMA</p>
              </div>
            </div>
            
            <button
              className="hamburger active"
              aria-label="Toggle menu"
              aria-expanded={true}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu Overlay */}
        <div className="menu open">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
          </ul>
        </div>
        
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-text">
            <p className="intro">Hi, I'm</p>
            <h1>Erdi Pratama</h1>
            <h2>Web Developer</h2>
            <p className="welcome">Welcome to My personal website.</p>
          </div>
          
          <div className="hero-img">
            <div className="profile-placeholder"></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MobileDemo;

// CSS for the demo
const styles = `
.phone-mockup {
  width: 300px;
  height: 600px;
  background-color: #111;
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0 0 50px rgba(0,0,0,0.3);
  margin: 40px auto;
  position: relative;
  overflow: hidden;
}

.phone-screen {
  background-color: white;
  height: 100%;
  width: 100%;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
}

.profile-placeholder {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(45deg, #f3f3f3, #d7d7d7);
  border: 4px solid #ffffff;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}
`;