import React from 'react';
import './About.css';

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-label">About Us</p>
          <h1>We build what <span className="accent">sells.</span></h1>
          <p className="about-subtitle">
            Based in Vietnam, CBEC Solutions is your cross‑border commerce partner. We combine strategic insight, data‑driven research and hands‑on execution to help you build products that sell and brands that last. Join our community and be the first to know when we launch.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mv-wrapper" id="mission-vision">
        <p className="mv-label">Mission & Vision</p>
        <h2 className="mv-heading">Why We Exist</h2>

        {/* Mission — full-width dark card */}
        <div className="mv-mission-card">
          <h3>Our Mission</h3>
          <p>
            To empower businesses with the insights, infrastructure, and execution capabilities needed to build profitable eCommerce brands in global markets.
          </p>
        </div>

        {/* Vision — single card, single column */}
        <div className="mv-vision-card">
          <h3>Our Vision</h3>
          <p>
            To be the go-to strategic partner for eCommerce operators who want to compete globally without compromising on execution quality or commercial discipline.
          </p>
          <p>
            We see a future where Vietnamese operational excellence meets global eCommerce standards — where businesses don't choose between cost efficiency and strategic sophistication.
          </p>
          <p>
            CBEC Solutions bridges that gap, delivering world-class eCommerce infrastructure with the speed and agility of a next-generation agency.
          </p>
        </div>

        {/* Core Values */}
        <h2 className="mv-heading" style={{ marginTop: '5rem' }}>Core Values</h2>
        <div className="cv-grid">
          <div className="cv-card cv-green">
            <h4>Revenue First</h4>
            <p>Every project, every decision, every optimization is judged by its impact on the bottom line.</p>
          </div>
          <div className="cv-card cv-blue">
            <h4>Operator Mentality</h4>
            <p>We think like owners, not vendors. Your business outcomes are our scoreboard.</p>
          </div>
          <div className="cv-card cv-orange">
            <h4>Radical Transparency</h4>
            <p>No hiding behind jargon. We communicate performance, challenges, and opportunities with brutal honesty.</p>
          </div>
          <div className="cv-card cv-green">
            <h4>Speed of Execution</h4>
            <p>Markets move fast. We move faster. Velocity is a competitive advantage.</p>
          </div>
          <div className="cv-card cv-blue">
            <h4>Global Standards</h4>
            <p>Vietnam-based doesn't mean local-thinking. We compete on the world stage.</p>
          </div>
          <div className="cv-card cv-green">
            <h4>Continuous Learning</h4>
            <p>eCommerce evolves daily. We stay ahead by learning relentlessly and adapting quickly.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
