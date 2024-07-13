import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{
          background: 'linear-gradient(to right, #602040, #4d004d, #1a001a)',
          position: 'fixed',
          width: '100%',
          zIndex: '1000',
          transition: 'height 0.3s ease',
          height: isOpen ? 'auto' : '10%',
          paddingTop: isOpen ? '0' : '1vh', // Adjusted distance from top when collapsed
        }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{
              color: 'white',
              marginLeft: '8vh',
              marginTop: isOpen ? '2vh' : '2vh', // Adjusted distance from top based on isOpen state
              marginBottom: isOpen ? '2vh' : '2vh',
              fontSize: '2rem',
              fontWeight: '500',
              transition: 'margin 0.3s ease',
            }}
          >
            Janhvi
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            style={{
              
              color: 'white', // Color of the button text
              fontWeight: 'bold', // Make the text bold
              padding: '0.5rem 0.75rem', // Increase padding for better visibility
              backgroundColor: 'transparent', // Ensure background is transparent
              boxShadow: 'none', // Remove any box shadow
            }}
            
          >
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;charset=UTF8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='4' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")",
              }}
            ></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
            style={{
              textAlign: 'center',
              backgroundColor: 'inherit',
              display: isOpen ? 'block' : 'none', // Hide navbar items when closed
              justifyContent: 'flex-end',
            }}
          >
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              style={{
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: '350',
                marginRight: '3vh',
                justifyContent: 'flex-end',
                padding: '1rem 0',
              }}
            >
              <li className="nav-item" style={{ margin: '0 1.5vh' }}>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: 'white' }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item" style={{ margin: '0 1.5vh' }}>
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: 'white' }}
                >
                  About
                </a>
              </li>
              <li className="nav-item" style={{ margin: '0 1.5vh' }}>
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: 'white' }}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item" style={{ margin: '0 1.5vh' }}>
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: 'white' }}
                >
                  Project
                </a>
              </li>
              <li className="nav-item" style={{ margin: '0 1.5vh' }}>
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: 'white' }}
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
