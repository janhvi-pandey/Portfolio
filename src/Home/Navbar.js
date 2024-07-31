

import React, { useState } from 'react';
import './Navbar.css'; // Keeping minimal custom styles here

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom fixed-top">
      <div className="container-fluid" >
        <a className="navbar-brand" href="#home">Janhvi</a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"  style={{height: '4vh'}}></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${activeItem === 'home' ? 'active' : ''}`}
                href="#home"
                onClick={() => handleNavItemClick('home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item" style={{ color:'rgb(209, 207, 207)'}}>
              <a
                className={`nav-link ${activeItem === 'about' ? 'active' : ''}`}
                href="#about"
                onClick={() => handleNavItemClick('about')}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeItem === 'skills' ? 'active' : ''}`}
                href="#skills"
                onClick={() => handleNavItemClick('skills')}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeItem === 'project' ? 'active' : ''}`}
                href="#project"
                onClick={() => handleNavItemClick('project')}
              >
                Project
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeItem === 'contact' ? 'active' : ''}`}
                href="#contact"
                onClick={() => handleNavItemClick('contact')}
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