import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useIsMobile from '../../hooks/useIsMobile';
import './Mission.css';
import missionImg from '../../assets/mission-section/pexels-karola-g-4464815.jpg';

const Mission = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return; // Skip scroll logic on mobile

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrolled = -rect.top;
      const scrollableHeight = sectionHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;
      const raw = scrolled / scrollableHeight;
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // On mobile, everything is fully visible
  const contentOpacity = isMobile ? 1 : Math.min(1, progress / 0.3);
  const contentY = isMobile ? 0 : Math.max(0, 40 * (1 - progress / 0.3));

  return (
    <section className="mission-section" ref={sectionRef} id="mission">
      <div className="mission-pinned">
        {/* Vertical brand label */}
        <div
          className="mission-label"
          style={{ opacity: contentOpacity, transform: `translateY(-50%) rotate(180deg) translateX(${-contentY}px)` }}
        >
          <span className="mission-label-dot"></span>
          <span className="mission-label-text">CBEC SOLUTIONS</span>
        </div>

        <div className="mission-container">
          {/* LEFT: Image */}
          <div className="mission-image-wrap">
            <img src={missionImg} alt="CBEC Solutions" className="mission-image" />
          </div>

          {/* RIGHT: Content */}
          <div
            className="mission-copy"
            style={{ opacity: contentOpacity, transform: `translateY(${contentY}px)` }}
          >
            <h2 className="mission-tagline">
              <span style={{whiteSpace: 'nowrap'}}>World-class eCommerce,</span><br />
              <span className="mission-highlight">next-gen</span> execution.
            </h2>
            <p className="mission-desc">
              CBEC Solutions bridges gaps — delivering infrastructure with the speed and agility of a modern agency.
            </p>
            <button className="mission-cta" onClick={() => navigate('/about#mission-vision')}>
              <span className="mission-cta-text">Our Mission</span>
              <span className="mission-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
