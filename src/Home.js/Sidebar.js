import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Sidebar() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div 
      style={{
        position: 'fixed',
        
        right: 0,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '49%',
        borderRadius: '5%',
        marginLeft: 0,
     
      }}>
      <ul className="nav flex-column" style={{ border: '3px solid', paddingTop: '2vh', borderRadius: '5%', background: 'linear-gradient(to right, #df9fdf,#df9fdf,#df9fdf,#df9fdf,#990099)' }}>
        <li className="nav-item" style={{ paddingBottom: '1rem' }}>
          <a href="https://github.com/janhvi-pandey" target="_blank" rel="noopener noreferrer">
            <FaGithub
              size={35}
              style={{ color: hoveredIcon === 'github' ? '#fff' : '#000', transition: 'color 0.1s ease' }}
              onMouseEnter={() => handleIconHover('github')}
              onMouseLeave={handleIconLeave}
            />
          </a>
        </li>
        <li className="nav-item" style={{ paddingBottom: '1rem' }}>
          <a href="https://www.linkedin.com/in/janhvipandey/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin
              size={35}
              style={{ color: hoveredIcon === 'linkedin' ? '#0000b3' : '#000', transition: 'color 0.1s ease' }}
              onMouseEnter={() => handleIconHover('linkedin')}
              onMouseLeave={handleIconLeave}
            />
          </a>
        </li>
        <li className="nav-item" style={{ paddingBottom: '1rem' }}>
          <a href="https://www.instagram.com/its_shiviika/" target="_blank" rel="noopener noreferrer">
            <FaInstagram
              size={35}
              style={{ color: hoveredIcon === 'instagram' ? '#cc0052' : '#000', transition: 'color 0.1s ease' }}
              onMouseEnter={() => handleIconHover('instagram')}
              onMouseLeave={handleIconLeave}
            />
          </a>
        </li>
        <li className="nav-item" style={{ paddingBottom: '1rem' }}>
          <a href="https://wa.me/6307976482" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp
              size={35}
              style={{ color: hoveredIcon === 'whatsapp' ? '#009933' : '#000', transition: 'color 0.1s ease' }}
              onMouseEnter={() => handleIconHover('whatsapp')}
              onMouseLeave={handleIconLeave}
            />
          </a>
        </li>
        <li className="nav-item" style={{ paddingBottom: '1rem' }}>
          <a href="https://x.com/Shiviika23" target="_blank" rel="noopener noreferrer">
            <FaTwitter
              size={35}
              style={{ color: hoveredIcon === 'twitter' ? '#0099ff' : '#000', transition: 'color 0.1s ease' }}
              onMouseEnter={() => handleIconHover('twitter')}
              onMouseLeave={handleIconLeave}
            />
          </a>
        </li>
        <li className="nav-item" style={{ paddingBottom: '1rem' }}>
          <a href="mailto:shivipandey993@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope
              size={35}
              style={{ color: hoveredIcon === 'envelope' ? '#e68a00' : '#000', transition: 'color 0.1s ease' }}
              onMouseEnter={() => handleIconHover('envelope')}
              onMouseLeave={handleIconLeave}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
