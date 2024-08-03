import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LiaCertificateSolid } from "react-icons/lia";
import "./certification.css"; // Import the CSS file

// Sample images (replace with actual imports)
import certificationImage1 from "../images/Certificate-1.png";
import certificationImage2 from "../images/Certificate-2.png";
import certificationImage3 from "../images/Certificate-3.png";
import certificationImage4 from "../images/Certificate-4.png";

// Array of certifications
const certifications = [
  {
    title: "Certificate of Training By Internshala",
    image: certificationImage1,
    description: "Course: Web Development",
    certificationLink: "https://example.com/certification-one", // Update with actual certification URL
  },
  {
    title: "Certificate By Google Developer Student Clubs",
    image: certificationImage2,
    description: "Google Cloud Career Pathway Campaign",
    certificationLink: "https://example.com/certification-two", // Update with actual certification URL
  },
  {
    title: "Certificate of Achievement By Infosys",
    image: certificationImage3,
    description: "Course: Programming Using C++",
    certificationLink: "https://example.com/certification-three", // Update with actual certification URL
  },
  {
    title: "Certificate of Achievement By Infosys",
    image: certificationImage4,
    description: "Course: Programming Using C++",
    certificationLink: "https://example.com/certification-four", // Update with actual certification URL
  },
  // Add more certifications as needed
];

// CertificationCard component
const CertificationCard = ({ certification }) => {
  return (
    
    <div className="certification-card">
      {/* Header with window controls and Certification link */}
      <div className="card-header">
        <div className="window-controls">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="certification-link">
          <a
            href={certification.certificationLink}
            target="_blank"
            rel="noopener noreferrer"
          >
          <b><LiaCertificateSolid size={25}  /></b>  
          </a>
        </div>
      </div>

      {/* Image */}
      <img
        src={certification.image}
        alt={`${certification.title} preview`}
        className="certification-image"
      />

      {/* Certification Details */}
      <h3 className="certification-title">{certification.title}</h3>
      <p className="certification-description">{certification.description}</p>
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
      <h2 className="slider-title" id="certifications">Certifications</h2>

      <div className="slider-container">
        <Slider {...settings}>
          {certifications.map((certification, index) => (
            <div key={index} className="slide">
              <CertificationCard certification={certification} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CertificationSlider;
