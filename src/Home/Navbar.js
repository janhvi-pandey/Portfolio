import React, { useState } from 'react';
import './Navbar.css'; // Keeping minimal custom styles here

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Utility function to scroll with an offset
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Calculate current navbar height
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  const handleNavItemClick = (item, sectionId) => {
    setActiveItem(item);
    scrollToSection(sectionId);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom fixed-top" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home" onClick={() => handleNavItemClick('home', '#home')}>Janhvi</a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{ height: '4vh' }}></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${activeItem === 'home' ? 'active' : ''}`}
                href="#home"
                onClick={(e) => { e.preventDefault(); handleNavItemClick('home', '#home'); }}
              >
                Home
              </a>
            </li>
            <li className="nav-item" style={{ color: 'rgb(209, 207, 207)' }}>
              <a
                className={`nav-link ${activeItem === 'about' ? 'active' : ''}`}
                href="#about"
                onClick={(e) => { e.preventDefault(); handleNavItemClick('about', '#about'); }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeItem === 'skills' ? 'active' : ''}`}
                href="#skills"
                onClick={(e) => { e.preventDefault(); handleNavItemClick('skills', '#skills'); }}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeItem === 'project' ? 'active' : ''}`}
                href="#project"
                onClick={(e) => { e.preventDefault(); handleNavItemClick('project', '#projects'); }}
              >
                Project
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeItem === 'contact' ? 'active' : ''}`}
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavItemClick('contact', '#contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
