import React, { useState, useEffect, useRef } from 'react';
import useIsMobile from '../../hooks/useIsMobile';
import './ComingSoon.css';

const title = 'Coming Soon';
const paragraph = 'We help brands identify winning products for the US and European markets, develop product ideas and launch strategies, source reliable suppliers and manage your eCommerce presence end-to-end.';

const ComingSoon = () => {
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

  const words = paragraph.split(' ');
  const totalWords = words.length;

  // On mobile, everything is fully visible
  const titleOpacity = isMobile ? 1 : Math.min(1, progress / 0.15);
  const wordProgress = isMobile ? 1 : Math.max(0, (progress - 0.15) / 0.8);
  const revealedWordCount = isMobile ? totalWords : Math.floor(wordProgress * totalWords);

  return (
    <section className="cs-section" ref={sectionRef} id="coming-soon">
      <div className="cs-pinned">
        <div className="cs-content">
          <h2
            className="cs-title"
            style={{ opacity: titleOpacity }}
          >
            {title}
          </h2>
          <p className="cs-paragraph">
            {words.map((word, i) => (
              <span
                key={i}
                className={`cs-word ${i < revealedWordCount ? 'revealed' : ''}`}
              >
                {word}{' '}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;