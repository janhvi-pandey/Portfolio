import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LiaCertificateSolid } from "react-icons/lia";
import "./certification.css";

import certificationImage1 from "../images/Certificate-1.png";
import certificationImage2 from "../images/Certificate-2.png";
import certificationImage3 from "../images/Certificate-3.png";
import certificationImage4 from "../images/Certificate-4.png";

const certifications = [
  {
    title: "Internshala",
    image: certificationImage1,
    description: "Course: Web Development",
    certificationLink: "https://example.com/certification-one",
  },
  {
    title: "Google Developer Student Clubs",
    image: certificationImage2,
    description: "Google Cloud Career Pathway Campaign",
    certificationLink: "https://example.com/certification-two",
  },
  {
    title: "Infosys",
    image: certificationImage3,
    description: "Course: Programming Using C++",
    certificationLink: "https://example.com/certification-three",
  },
  {
    title: "Infosys",
    image: certificationImage4,
    description: "Course: Fundamentals Of Information Security",
    certificationLink: "https://example.com/certification-four",
  },
];

// CertificationCard component
const CertificationCard = ({ certification }) => {
  // Helper function to truncate description if it exceeds 36 words
  const renderDescription = (description) => {
    const wordLimit = 36;
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return `${words.slice(0, wordLimit).join(" ")}...`;
    }
    return description;
  };

  return (
    <div className="certification-card">
      {/* Header with window controls and Certification link */}
      <div className="card-header">
        <div className="window-controls">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="certification-icon">
          <b>
            <LiaCertificateSolid size={25} style={{ color: "white" }} />
          </b>
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
      <p className="certification-description">
        {renderDescription(certification.description)}
      </p>
    </div>
  );
};

// CertificationSlider component
const CertificationSlider = () => {
  // Slider settings
  const settings = {
    infinite: true,
    speed: 1500,
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
      <h2 className="slider-title" id="certifications">
        Certifications
      </h2>

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
