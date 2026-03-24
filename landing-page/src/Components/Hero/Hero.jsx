import React from 'react';
import './Hero.css';
import heroVideo from '../../assets/hero-section/hero section.mp4';

const Hero = () => {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <p className="hero-brad">CBEC SOLUTIONS</p>
        <h1>Build What Sells.</h1>
        <p className="hero-subtitle">A Vietnam-based eCommerce and digital services agency delivering strategic, operator-led solutions for global markets.</p>
        <div className="hero-buttons">
          <button className="hero-pill active">Strategic</button>
          <button className="hero-pill">Operator-Led</button>
          <button className="hero-pill">Global</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;