import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="logo">
        <span>OrO</span>
      </div>

      <div className="nav-marquee">
        <p>Free delivery over ₹599 . 3 for ₹1199</p>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/shop">Shop</Link></li> 
  <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/login">Login</Link></li> {/* Added Login */}
</ul>

    </nav>
  );
};

export default Navbar;
