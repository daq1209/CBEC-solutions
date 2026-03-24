import React, { useState } from 'react';
import './ContactForm.css';
import contactBg from '../../assets/contact-bg.png';

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: hook up to backend or email service
    setFormData({ name: '', phone: '', message: '' });
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`contact-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />

      {/* Overlay Panel */}
      <div className={`contact-overlay ${isOpen ? 'open' : ''}`}>
        {/* LEFT: Image + Title */}
        <div className="contact-left">
          <img src={contactBg} alt="" className="contact-left-bg" />
          <div className="contact-left-content">
            <h2>
              Get in touch<br />
              <span>with us</span>
            </h2>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="contact-right">
          <button className="contact-close" onClick={onClose} aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
                id="contact-name"
              />
              <label htmlFor="contact-name">Name</label>
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder=" "
                id="contact-phone"
              />
              <label htmlFor="contact-phone">Phone</label>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
                id="contact-message"
                rows="4"
              />
              <label htmlFor="contact-message">Message</label>
            </div>

            <div className="contact-form-footer">
              <button type="submit" className="contact-submit">
                SUBMIT A REQUEST
              </button>
              <p className="contact-privacy">
                By clicking the button, you agree<br />
                to our <a href="#">Privacy Policy</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
