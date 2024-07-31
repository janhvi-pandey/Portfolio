import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { FaGithub } from "react-icons/fa";

// Sample images (replace with actual imports)
import certificationImage1 from "../images/Certificate-1.png";
import certificationImage2 from "../images/Certificate-2.png";
import certificationImage3 from "../images/Certificate-3.png";
import certificationImage4 from "../images/Certificate-4.png";

import { LiaCertificateSolid } from "react-icons/lia";
// Array of certifications
const certifications = [
  {
    title: "Certification One",
    image: certificationImage1,
    description: "This is a description of Certification One.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/yourprofile/certification-one", // Update with actual GitHub URL
  },
  {
    title: "Certification Two",
    image: certificationImage2,
    description: "This is a description of Certification Two.",
    technologies: ["React", "Node.js", "Express"],
    githubLink: "https://github.com/yourprofile/certification-two", // Update with actual GitHub URL
  },
  {
    title: "Certification Three",
    image: certificationImage3,
    description: "This is a description of Certification Three.",
    technologies: ["Python", "Django", "SQLite"],
    githubLink: "https://github.com/yourprofile/certification-three", // Update with actual GitHub URL
  },
  {
    title: "Certification Four",
    image: certificationImage4,
    description: "This is a description of Certification Four.",
    technologies: ["Ruby", "Rails", "PostgreSQL"],
    githubLink: "https://github.com/yourprofile/certification-four", // Update with actual GitHub URL
  },
 //Add more certifications as needed
];

// CertificationCard component
const CertificationCard = ({ certification, style }) => {
  return (
    <div className="certification-card" style={style}>
      {/* Header with window controls and GitHub link */}
      {/* <div
        className="card-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: '8px',
          backgroundImage: 'linear-gradient(to right, #602040, #4d004d, #1a001a)',
        }}
      >
        <div
          className="window-controls"
          style={{ display: "flex", gap: "5px" }}
        >
          <span
            className="dot"
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#ff5f56",
            }}
          ></span>
          <span
            className="dot"
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#ffbd2e",
            }}
          ></span>

          <span
            className="dot"
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#27c93f",
            }}
          ></span>
        </div>
        <div className="github-link">
          <a
            href={certification.githubLink} // Use the certification’s GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
          >
            <FaGithub size={25} />
          </a>
        </div>
      </div> */}

      {/* Image */}
      <img
        src={certification.image}
        alt={`${certification.title} preview`}
        style={{
          width: "100%",
          height: "236px",
          borderTop: '1px solid white',
          borderBottom: '1px solid black',
          marginBottom: "10px",
          objectFit: 'cover',
        }}
      />

      {/* Certification Details */}
      <h3 style={{ fontSize: "1.8rem", margin: "9px 0", paddingLeft: '10px' }}>
        {certification.title}
      </h3>
      <p style={{ fontSize: "1rem", marginBottom: "9px", paddingLeft: '10px' }}>
        {certification.description}
      </p>
      <ul style={{ listStyleType: "none", paddingLeft: "10px", display: 'flex', flexWrap: 'wrap', margin: 0 }}>
        {certification.technologies.map((tech, index) => (
          <li key={index} style={{ fontSize: "0.9rem", marginBottom: "5px", border: '1.5px solid black', borderRadius: '5px', padding: '3px', marginRight: '10px', background: 'rgb(240, 240, 240)' }}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

// CertificationSlider component
const CertificationSlider = () => {
  // Slider settings
  const settings = {
    infinite: true,
    speed: 950,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
          marginTop: "5rem",
          marginBottom: "4rem",
          fontWeight: "bold",
          color: "#4d1a00",
        }}
      >
        Certifications
      </h2>

      <div style={{ overflow: 'hidden', margin: '0 auto', width: '100%' }}>
        <Slider {...settings}>
          {certifications.map((certification, index) => (
            <div key={index} style={{ padding: '0 10px' }}> {/* Adjusted padding */}
              <CertificationCard
                certification={certification}
                style={{
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                  width: "100%",
                  maxWidth: "350px", // Set a max-width for large screens
                  margin: '0 auto', // Center the card horizontally
                  height: "auto",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  border: "1.6px solid black",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CertificationSlider;
