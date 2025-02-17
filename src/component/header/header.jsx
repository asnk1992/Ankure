import React, { useState, useEffect } from 'react';
import '../header/style.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="header">
        <a href='#' className='logo'><img className='logos' src='public/assets/logos/log.png' alt='#'/></a>

        {/* Hamburger Icon for Small Screens */}
        <div className="menu-icon" onClick={toggleButton}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </div>

        {/* Navbar */}
        <nav className={`navbar ${isOpen ? 'active' : ''}`}>
          <a href='#about' className='active'>About Me</a>
          <a href='#project'>Project</a>
          <a href='#portfolio'>Skills</a>
          <a href='#service'>Experience</a>
          <a href='#service'>Service</a>
          <a href='#contact'>Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
