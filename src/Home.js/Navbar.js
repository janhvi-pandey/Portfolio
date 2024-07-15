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
    setIsOpen(false); // Optionally close navbar on item click
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom fixed-top">
      <div className="container-fluid" style={{ minHeight: '5.5vh' }}>
        <a className="navbar-brand" href="#home">Janhvi</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ height: '3vh' }}></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            {['home', 'about', 'skills', 'project', 'contact'].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className={`nav-link ${activeItem === item ? 'active' : ''}`}
                  href={`#${item}`}
                  onClick={() => handleNavItemClick(item)}
                  aria-current={activeItem === item ? 'page' : undefined}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
