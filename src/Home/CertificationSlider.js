import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Sample images (replace with actual imports)
import certificateImage1 from "../images/Certificate-1.png";
import certificateImage2 from "../images/Certificate-2.png";
import certificateImage3 from "../images/Certificate-3.png";
import certificateImage4 from "../images/Certificate-4.png";

// Array of certifications
const certifications = [
  {
    title: "Certification One",
    image: certificateImage1,
    description: "This is a description of Certification One.",
  },
  {
    title: "Certification Two",
    image: certificateImage2,
    description: "This is a description of Certification Two.",
  },
  {
    title: "Certification Three",
    image: certificateImage3,
    description: "This is a description of Certification Three.",
  },
  {
    title: "Certification Four",
    image: certificateImage4,
    description: "This is a description of Certification Four.",
  },
  // Add more certifications as needed
];

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

      <Slider {...settings}>
        {certifications.map((certification, index) => (
          <div key={index} style={{ width: '100%' }}>
            <div
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
                width:"90%",
                margin: '5%',
                height:"auto",
                transition: "transform 0.3s ease",
                cursor: "pointer",
                border: "2px solid black",
              }}
            >
              <img
                src={certification.image}
                alt={certification.title}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "5px 5px 0 0",
                }}
              />
              <div style={{ padding: "1rem", backgroundColor: "#fff" }}>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                    color: "#4d1a00",
                  }}
                >
                  {certification.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#333" }}>
                  {certification.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default CertificationSlider;
