import React, { useState, useEffect, useRef } from 'react';
import './WhatWeDo.css';

import imgResearch from '../../assets/what-we-do-section/Market-led research.jpg';
import imgStrategy from '../../assets/what-we-do-section/Product & GTM Strategy.jpg';
import imgSourcing from '../../assets/what-we-do-section/supplier sourcing.jpg';
import imgExecution from '../../assets/what-we-do-section/eCommerce Execution.jpg';

const cards = [
  {
    title: 'Market-led Research',
    description: 'We discover high-demand product opportunities using data, ensuring your offer is built around what shoppers truly want.',
    image: imgResearch,
  },
  {
    title: 'Product & GTM Strategy',
    description: 'Our team crafts product concepts, positioning and go-to-market plans that set you up for launch and scale',
    image: imgStrategy,
  },
  {
    title: 'Supplier Sourcing',
    description: 'We connect you with reliable suppliers so you can focus on building your brand, not chasing production.',
    image: imgSourcing,
  },
  {
    title: 'eCommerce Execution',
    description: 'From Amazon account management to listing optimisation, we handle the operations that drive sales',
    image: imgExecution,
  },
];

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const scrolled = -rect.top; // How far we've scrolled into this section

      if (scrolled < 0) {
        setActiveIndex(0);
        return;
      }

      // Divide the scrollable area into equal zones for each card
      const scrollableHeight = sectionHeight - window.innerHeight;
      const zoneHeight = scrollableHeight / cards.length;
      const newIndex = Math.min(
        cards.length - 1,
        Math.max(0, Math.floor(scrolled / zoneHeight))
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="wwd-section" ref={sectionRef} id="what-we-do">
      <div className="wwd-pinned">
        <div className="wwd-layout">
          {/* LEFT: Title + Image */}
          <div className="wwd-left">
            <h2 className="wwd-title">What We Do</h2>
            <div className="wwd-image-frame">
              {cards.map((card, i) => (
                <img
                  key={i}
                  src={card.image}
                  alt={card.title}
                  className={`wwd-image ${activeIndex === i ? 'visible' : ''}`}
                />
              ))}
            </div>
            <div className="wwd-step-indicator">
              {cards.map((_, i) => (
                <span
                  key={i}
                  className={`wwd-dot ${activeIndex === i ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Card content */}
          <div className="wwd-right">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`wwd-card ${activeIndex === i ? 'active' : ''}`}
              >
                <span className="wwd-step-number">0{i + 1}</span>
                <div className="accent-line"></div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
