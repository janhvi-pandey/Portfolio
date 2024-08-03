import React, { useState } from "react";

export default function Footer() {
  // State to track which nav link is hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Event handlers to set and clear hover state
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
   // Function to handle scrolling with offset
   const handleScroll = (id) => {
    // Prevent default behavior
    window.event.preventDefault();
    
    const element = document.getElementById(id);
    const offset = -50; // Adjust this value to your header height or desired offset
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset + offset;

    // Smooth scroll to the position with offset
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const styles = {
    footer: {
      marginTop:'3%',
      width: "100%",
      backgroundImage: "linear-gradient(to right, #7a3a59, #660066, #330033)", // Updated background gradient with slightly lighter shades
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
      fontFamily: "'Poppins', sans-serif", // Added custom font style
      backgroundImage: "linear-gradient(to right, #ff6b6b, #ff8787)", // Gradient color for text
      WebkitBackgroundClip: "text", // Makes the gradient text visible
      WebkitTextFillColor: "transparent", // Makes text transparent to show gradient
      "@media (max-width: 768px)": {
        fontSize: "1.5rem",
      },
    },
    tagline: {
      fontFamily: "Trirong, serif",
      fontSize: "1.3rem",
      marginBottom:'0px',
      margin: "0.5rem 0 0",
      "@media (max-width: 768px)": {
        fontSize: "1.1rem",
      },
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
      color: "#ffd700", // Gold color to highlight
    },
    navLink: (index) => ({
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: "500",
      transition: "transform 0.3s ease, color 0.3s ease", // Added transform transition
      display: "block",
      padding: "0.5rem 0.5rem",
      transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)", // Scale effect on hover
      color: hoveredIndex === index ? "#ffd700" : "#fff", // Change color on hover
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
        color: "#ffd700", // Hover color for legal links
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
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Certifications",
              "Contact",
            ].map((item, index) => (
              <li key={item}>
                <span
                  // Use span instead of anchor to handle custom scroll
                  onClick={() => handleScroll(item.toLowerCase())}
                  style={styles.navLink(index)} // Apply style with hover state
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