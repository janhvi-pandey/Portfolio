import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import hooks from react-router-dom
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const location = useLocation(); // Detect the current route
  const navigate = useNavigate();  // Navigate programmatically

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Utility function to scroll with an offset
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  const handleNavItemClick = (item, sectionId) => {
    setActiveItem(item);

    if (location.pathname !== '/') {
      // If not on home page, navigate to home and scroll to section
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If already on home page, scroll to section directly
      scrollToSection(sectionId);
    }
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
            <li className="nav-item">
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
                href="#projects"
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
