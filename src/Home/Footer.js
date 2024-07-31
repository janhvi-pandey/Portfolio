import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Branding */}
        <div style={styles.branding}>
          <h1 style={styles.name}>Janhvi Pandey</h1>
          <p style={styles.tagline}>Building solutions, one line at a time.</p>
        </div>

        {/* Navigation Links */}
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            {["Home", "About", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
              <li key={item} style={styles.navItem}>
                <a href={`#${item.toLowerCase()}`} style={styles.navLink}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal Information */}
        <div style={styles.legalContainer}>
          <p style={styles.legalText}>© 2024 Janhvi Pandey. All rights reserved.</p>
          <div style={styles.legalLinks}>
            <a href="/privacy-policy" style={styles.legalLink}>
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms-of-service" style={styles.legalLink}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Styles
const styles = {
  footer: {
    width: "100%",
    backgroundColor: "#4d1a00",
    color: "#fff",
    padding: "2rem 1rem",
    borderTop: "2px solid #333",
    boxSizing: "border-box",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    textAlign: "center",
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
    '@media (max-width: 768px)': {
      fontSize: "1.5rem",
    },
  },
  tagline: {
    fontFamily: "Trirong, serif",
    fontSize: "1.1rem",
    margin: "0.5rem 0 0",
    '@media (max-width: 768px)': {
      fontSize: "1rem",
    },
  },
  nav: {
    marginBottom: "1rem",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem", // Maintains spacing between items
    boxSizing: "border-box",
  },
  navItem: {
    margin: 0, // Removed margin-right
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  legalContainer: {
    fontSize: "0.9rem",
    boxSizing: "border-box",
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
  },
};

export default Footer;
