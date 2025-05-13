import '../styles/Hero.css'; 
import avatar from '../assets/profile-picture.png'; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p>Hi, I'm</p>
        <h1>Erdi Pratama</h1>
        <h2>Web Develover</h2>
        <p>Welcome to my personal website.</p>
         </div>
           <div className="hero-img">
             <img src={avatar} alt="Avatar" />
          </div>
    </section>
  );
};

export default Hero;
