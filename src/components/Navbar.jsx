import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="wrapper">
        <div className="menu">
          {/* Menu items will go here */}
        </div>
        <div className="logo-container">
          <div className="logo">
            <h1 className="portfolio-text">PORTFOLIO</h1>
            <p className="byline">BY ERDI PRATAMA</p>
            <p className="address">Bandung, Indonesia</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;