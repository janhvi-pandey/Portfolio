import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import hooks from react-router-dom

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation(); // Detect the current route
  const navigate = useNavigate(); // Navigate programmatically

  // Event handlers to set and clear hover state
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Function to scroll with offset
  const handleScroll = (sectionId) => {
    const section = document.querySelector(sectionId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get navbar height

    // Check if section exists
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  const handleNavItemClick = (item, sectionId) => {
    if (location.pathname !== '/') {
      // If not on the home page, navigate to home and scroll to section
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If already on home page, scroll to section directly
      handleScroll(sectionId);
    }
  };

  const styles = {
    footer: {
      marginTop: '3%',
      width: "100%",
      backgroundImage: "linear-gradient(to right, #7a3a59, #660066, #330033)",
      color: "#fff",
      padding: "2rem",
      borderTop: "2px solid #333",
      boxSizing: "border-box",
      textAlign: "center",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      boxSizing: "border-box",
    },
    branding: {
      marginBottom: "1rem",
    },
    name: {
      fontSize: "2rem",
      fontWeight: "bold",
      margin: "0",
      fontFamily: "'Poppins', sans-serif",
      backgroundImage: "linear-gradient(to right, #ff6b6b, #ff8787)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    tagline: {
      fontFamily: "Trirong, serif",
      fontSize: "1.3rem",
      margin: "0.5rem 0 0",
    },
    nav: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    navList: {
      listStyleType: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "1rem",
    },
    loveNote: {
      marginTop: "2rem",
      fontSize: "0.9rem",
      color: "#ffd700",
    },
    navLink: (index) => ({
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: "500",
      transition: "transform 0.3s ease, color 0.3s ease",
      display: "block",
      padding: "0.5rem 0.5rem",
      transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
      color: hoveredIndex === index ? "#ffd700" : "#fff",
    }),
    legalContainer: {
      fontSize: "0.9rem",
    },
    legalText: {
      marginBottom: "0.5rem",
    },
    legalLinks: {
      display: "inline",
      gap: "0.5rem",
    },
    legalLink: {
      color: "#fff",
      textDecoration: "none",
      transition: "color 0.3s ease",
      "&:hover": {
        color: "#ffd700",
      },
    },
  };

  return (
    <div style={styles.footer}>
      <div style={styles.container}>
        {/* Branding */}
        <div style={styles.branding}>
          <h1 style={styles.name}>Janhvi Pandey</h1>
          <p style={styles.tagline}>Building solutions, one line at a time.</p>
        </div>

        {/* Navigation Links */}
        <div style={styles.nav}>
          <ul style={styles.navList}>
            {["Home", "About", "Skills", "Projects", "Certifications", "Contact"].map((item, index) => (
              <li key={item}>
                <span
                  onClick={() => handleNavItemClick(item.toLowerCase(), `#${item.toLowerCase()}`)} // Adjusted to map the item to the correct section id
                  style={styles.navLink(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Information */}
        <div style={styles.legalContainer}>
          <p style={styles.legalText}>
            © 2024 Janhvi Pandey. All rights reserved.
          </p>
          <div style={styles.legalLinks}>
            <a href="/privacy-policy" style={styles.legalLink}>
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms-of-service" style={styles.legalLink}>
              Terms of Service
            </a>
          </div>
          <p style={styles.loveNote}>Designed with &hearts; by Janhvi Pandey</p>
        </div>
      </div>
    </div>
  );
}
