import '../styles/Hero.css';
import avatar from '../assets/profile-picture.webp';

const Hero = () => {
  return (
    <>
      <section className="hero" data-testid="hero-section">
        <div className="hero-text">
          <p className="intro">Hi, I'm</p>
          <h1 itemProp="name">Erdi Pratama</h1>
          <h2 itemProp="jobTitle">Web Developer</h2>
          <p className="welcome">Welcome to My personal website.</p>
        </div>

        <div className="hero-img">
          <img
            src={avatar}
            alt="Erdi Pratama - Web Developer"
            width="300"
            height="300"
            loading="eager"
            itemProp="image"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
