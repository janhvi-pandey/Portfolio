import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home'); // Initial active item

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (item) => {
    setActiveItem(item);
    // set colour of item  is yellow
    document.getElementById(item).style.color = '#fff';
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${isOpen ? 'navbar-open' : 'navbar-closed'}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Janhvi
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ marginRight: '8vh' }}>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeItem === 'home' ? 'active' : ''}`}
                  aria-current="page"
                  href="#"
                  onClick={() => handleNavItemClick('home')}
                  
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeItem === 'about' ? 'active' : ''}`}
                  href="#"
                  onClick={() => handleNavItemClick('about')}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeItem === 'skills' ? 'active' : ''}`}
                  href="#"
                  onClick={() => handleNavItemClick('skills')}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeItem === 'project' ? 'active' : ''}`}
                  href="#"
                  onClick={() => handleNavItemClick('project')}
                >
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeItem === 'contact' ? 'active' : ''}`}
                  href="#"
                  onClick={() => handleNavItemClick('contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
