import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"
import "./project.css"; // Import the CSS file

import { FaGithub } from "react-icons/fa";

// Sample images (replace with actual imports)
import projectImage1 from "../images/secret.png";
import projectImage2 from "../images/Portfolio.png";
import projectImage3 from "../images/karam.png";
import projectImage4 from "../images/news.png";
import projectImage5 from "../images/YourMeal.png";
import projectImage6 from "../images/Textutils.png";
import projectImage7 from "../images/TicTacToe.png";
import projectImage8 from "../images/Spotify.png";
import projectImage9 from "../images/snake.png";

// Array of projects
const projects = [
  {
    title: "Secret Script",
    image: projectImage1,
    description: "A secure platform for managing sensitive data",
    technologies: ["MongoDb", "ExpressJS", "React", "NodeJS"],
    githubLink: "https://github.com/janhvi-pandey/Secret-Script-Frontend", // Update with actual GitHub URL
  },
  {
    title: "My Personal Portfolio",
    image: projectImage2,
    description: "Curated showcase of my best work",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    githubLink: "https://github.com/janhvi-pandey/Portfolio", // Update with actual GitHub URL
  },
  {
    title: "Karam: Customer Query Management",
    image: projectImage3,
    description: "Efficient & streamlined customer query management",
    technologies: ["React", "NodeJS", "MongoDb", "ExpressJS"],
    githubLink: "https://github.com/janhvi-pandey/Karam-Customer-Query-Management-Frontend", // Update with actual GitHub URL
  },
  {
    title: "NewsHub",
    image: projectImage4,
    description: "Aggregating real-time global news in one place",
    technologies: ["JavaScript", "React", "News API", "Bootstrap"],
    githubLink: "https://github.com/janhvi-pandey/NewsHub", // Update with actual GitHub URL
  },
  {
    title: "Your Meal",
    image: projectImage5,
    description: "Explore a world of culinary delights",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubLink: "https://github.com/janhvi-pandey/YourMeal", // Update with actual GitHub URL
  },
  {
    title: "TextUtils",
    image: projectImage6,
    description: "Transform and refine your text effortlessly",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    githubLink: "https://github.com/janhvi-pandey/TextUtils", // Update with actual GitHub URL
  },
  {
    title: "TicTac Zenith",
    image: projectImage7,
    description: "Challenge yourself in a classic game of strategy",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/janhvi-pandey/TIC-TAC-TOE", // Update with actual GitHub URL
  },
  {
    title: "Spotify",
    image: projectImage8,
    description: "Discover a world of musical treasures",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/janhvi-pandey/Spotify", // Update with actual GitHub URL
  },
  {
    title: "Hiss Of Doom",
    image: projectImage9,
    description: "Engaging Snake game: eat, grow, and conquer",
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
    const maxLength = 36;
    return !isLargeScreen && text.length > maxLength
      ? `${text.slice(0, maxLength)}...`
      : text;
  };

  // Helper function to render title truncated for small screens
  const renderTitle = (title) => {
    const maxLength = 22;
    return !isLargeScreen && title.length > maxLength
      ? `${title.slice(0, maxLength)}...`
      : title;
  };

  return (
    <div className="project-card">
      {/* Header with window controls and Project link */}
      <div className="card-header">
        <div className="window-controls">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="project-link">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>
              <FaGithub size={23} style={{ color: "white" }} />
            </b>
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
      <h3 className="project-title">{renderTitle(project.title)}</h3>
      <p className="project-description">
        {renderDescription(project.description)}
      </p>
      <ul
        style={{
          listStyleType: "none",
          paddingLeft: "10px",
          display: "flex",
          flexWrap: "wrap",
          margin: 0,
        }}
      >
        {project.technologies.map((tech, index) => (
          <li
            key={index}
            style={{
              fontSize: "0.7rem",
              border: "1px solid grey",
              borderRadius: "5px",
              padding: "3px",
              marginRight: "0.5rem",
              marginBottom: "0.5rem",
              background: "rgb(240, 240, 240)",
            }}
          >
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

  const navigate = useNavigate();

  // Handle "Explore my projects" button click
  const handleExploreProjects = () => {
    navigate("/projects");
  };

  return (
    <>
      <h2 className="slider-title" id="projects">
        Projects
      </h2>

      <div className="slider-container">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="slide">
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Explore my projects button */}
      <div className="explore-button-container">
        <button
          onClick={handleExploreProjects}
          className="explore-button"
        >
          Explore My Projects
        </button>
      </div>
    </>
  );
};

export default ProjectSlider;
