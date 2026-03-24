import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useIsMobile from '../../hooks/useIsMobile';
import './Navbar.css';

const Navbar = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to hash or top on route change
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const handleContactClick = () => {
    setDrawerOpen(false);
    onContactClick();
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-top'}`}>
        <Link to="/" className="logo">
          <span className="logo-dot"></span>
          <span className="logo-text">CBEC SOLUTIONS</span>
        </Link>

        {isMobile ? (
          /* Hamburger button */
          <button
            className={`hamburger ${drawerOpen ? 'active' : ''}`}
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        ) : (
          /* Desktop menu */
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li>
              <a
                href="#contact"
                className="contact-link"
                onClick={(e) => {
                  e.preventDefault();
                  onContactClick();
                }}
              >
                <div className="scene">
                  <div className="cube">
                    <span className="side top">Contact Us</span>
                    <span className="side front">Contact Us</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        )}
      </nav>

      {/* Mobile drawer */}
      {isMobile && (
        <>
          <div
            className={`drawer-backdrop ${drawerOpen ? 'open' : ''}`}
            onClick={() => setDrawerOpen(false)}
          />
          <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
            <div className="drawer-links">
              <Link to="/" className="drawer-link">Home</Link>
              <Link to="/about" className="drawer-link">About</Link>
              <Link to="/services" className="drawer-link">Services</Link>
              <button className="drawer-contact" onClick={handleContactClick}>
                Contact Us
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;