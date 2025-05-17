import React from 'react';
import './Footer.css'; // We'll style the footer here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <span>OrO</span>
      </div>

      {/* Navigation links */}
      <ul className="footer-nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Social Media Icons (optional) */}
      <div className="footer-social-icons">
        <a href="#facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="#instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
