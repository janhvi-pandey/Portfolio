import React, { useEffect, useState }  from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./project.css"; // Import the CSS file

import { FaGithub } from "react-icons/fa";

// Sample images (replace with actual imports)
import projectImage1 from "../images/Portfolio.png";
import projectImage2 from "../images/YourMeal.png";
import projectImage3 from "../images/Textutils.png";
import projectImage4 from "../images/TicTacToe.png";
import projectImage5 from "../images/Spotify.png";
import projectImage6 from "../images/snake.png";

// Array of projects
const projects = [
  {
    title: "My Personal Portfolio",
    image: projectImage1,
    description: "Curated showcase of my best work",
    technologies: ["HTML", "CSS", "JavaScript","React","Node.js"],
    githubLink: "https://github.com/janhvi-pandey/Portfolio", // Update with actual GitHub URL
  },
  {
    title: "Your Meal",
    image: projectImage2,
    description: "Explore a world of culinary delights.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/janhvi-pandey/YourMeal", // Update with actual GitHub URL
  },
  {
    title: "TextUtils",
    image: projectImage3,
    description: "Transform and refine your text effortlessly.",
    technologies: ["HTML", "CSS", "JavaScript","React", "Node.js"],
    githubLink: "https://github.com/janhvi-pandey/TextUtils", // Update with actual GitHub URL
  },
  {
    title: "TicTac Zenith",
    image: projectImage4,
    description: "Challenge yourself in a classic game of strategy.",
    technologies:  ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/janhvi-pandey/TIC-TAC-TOE", // Update with actual GitHub URL
  },
  {
    title: "Spotify",
    image: projectImage5,
    description: "Discover a world of musical treasures.",
    technologies:  ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/janhvi-pandey/Spotify", // Update with actual GitHub URL
  },
  {
    title: "Hiss Of Doom",
    image: projectImage6,
    description: "Engaging Snake game: eat, grow, and conquer.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/janhvi-pandey/Hiss-of-Doom", // Update with actual GitHub URL
  },
  // Add more projects as needed
];
const ProjectCard = ({ project }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkScreenWidth = () => {
      setIsLargeScreen(window.innerWidth >= 992); // Set threshold for large screens
    };

    // Check screen width on initial render
    checkScreenWidth();

    // Add event listener to update state on resize
    window.addEventListener("resize", checkScreenWidth);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  // Helper function to render truncated or full text
  const renderDescription = (text) => {
    const maxLength = 35;
    return !isLargeScreen && text.length > maxLength
      ? `${text.slice(0, maxLength)}...`
      : text;
  };
 return (
   
    <div className="project-card" >
      {/* Header with window controls and Project link */}
      <div className="card-header">
        <div className="window-controls">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="project-link">
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <b><FaGithub size={23} style={{color:'white'}}/></b>
          </a>
        </div>
      </div>

      {/* Image */}
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className="project-image"
      />

      {/* Project Details */}
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">  {renderDescription(project.description)}</p>
      <ul style={{ listStyleType: "none", paddingLeft: "10px", display: 'flex', flexWrap: 'wrap', margin: 0 }}>
        {project.technologies.map((tech, index) => (
          <li key={index} style={{ fontSize: "0.7rem", border: '1px solid grey', borderRadius: '5px', padding: '3px', marginRight: '0.5rem', marginBottom:'0.5rem', background: 'rgb(240, 240, 240)' }}>
            {tech}
          </li>
        ))}
      </ul>
      
    </div>
    
  );
};

// ProjectSlider component
const ProjectSlider = () => {
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
      <h2 className="slider-title" id="projects">Projects</h2>

      <div className="slider-container">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="slide">
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ProjectSlider;
