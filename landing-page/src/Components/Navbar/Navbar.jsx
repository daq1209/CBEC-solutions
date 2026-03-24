import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-top'}`}>
      <Link to="/" className="logo">
        <span className="logo-dot"></span>
        <span className="logo-text">CBEC SOLUTIONS</span>
      </Link>
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
    </nav>
  );
};

export default Navbar;