import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

// Define the theme colors for the social media icons
const socialLinks = [
  {
    icon: <FaGithub />,
    url: "https://github.com/janhvi-pandey",
    color: "#D3D3D3", // Light gray for GitHub
    hoverColor: "#000000", // Black for GitHub
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/janhvi-pandey",
    color: "#ADD8E6", // Light blue for LinkedIn
    hoverColor: "#0A66C2", // LinkedIn blue
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/its_shiviika",
    color: "#FFC0CB", // Light pink for Instagram
    hoverColor: "#E1306C", // Instagram magenta
  },
  {
    icon: <FaWhatsapp />,
    url: "https://wa.me/916307976482",
    color: "#90EE90", // Light green for WhatsApp
    hoverColor: "#25D366", // WhatsApp green
  },
  {
    icon: <FaTwitter />,
    url: "https://x.com/Shiviika23",
    color: "#B0E0E6", // Light sky blue for Twitter
    hoverColor: "#1DA1F2", // Twitter blue
  },
  {
    icon: <FaEnvelope />,
    url: "mailto:shivipandey993@gmail.com",
    color: "#FFA07A", // Light salmon for email
    hoverColor: "#D44638", // Gmail red
  },
];

export default function Sidebar() {
  return (
    <div
      className="d-none d-lg-flex flex-column align-items-center justify-content-center vh-100 position-fixed"
      style={{
        right: 0,
        top: 0,
      }}
    >
      <ul
        className="nav flex-column bg-light p-3"
        style={{
          backgroundImage:
            "linear-gradient(to right, #602040, #4d004d, #1a001a)",
          borderRadius: "2.5vh 0 0 2.5vh",
        }}
      >
        {socialLinks.map((link, index) => (
          <li className="nav-item mb-3" key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              style={{
                color: link.color, // Set initial color
                fontSize: "1.5rem",
                transition: "color 0.1s ease, transform 0.1s ease", // Smooth transform effect
              }}
              onMouseOver={(e) => {
                e.target.style.color = link.hoverColor;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = link.color;
              }}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
