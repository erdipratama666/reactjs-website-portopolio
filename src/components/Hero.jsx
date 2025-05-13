import '../styles/Hero.css';
import avatar from '../assets/profile-picture.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="intro">Hi, I'm</p>
        <h1>Erdi Pratama</h1>
        <h2>Web Developer</h2>
        <p className="welcome">Welcome to my personal website.</p>
      </div>
      
      <div className="hero-img">
        <img src={avatar} alt="Erdi Pratama" />
      </div>
    </section>
  );
};

export default Hero;