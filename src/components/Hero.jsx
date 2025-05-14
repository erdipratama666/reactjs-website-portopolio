import '../styles/Hero.css';
import avatar from '/assets/profile-picture.png'; // Import gambar dengan benar

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="intro">Hi, I'm</p>
        <h1>Erdi Pratama</h1>
        <h2>Web Developer</h2>
        <p className="welcome">Welcome to My personal website.</p>
      </div>
      
      <div className="hero-img">
        {/* Gunakan atribut loading="lazy" dan ukuran yang optimal */}
        <img 
          src={avatar} 
          alt="Erdi Pratama"
          loading="lazy"
          width="400" 
          height="400" 
        />
      </div>
    </section>
  );
};

export default Hero;