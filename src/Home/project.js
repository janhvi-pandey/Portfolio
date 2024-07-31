import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./project.css"; // Import the CSS file

import { FaGithub } from "react-icons/fa";

// Sample images (replace with actual imports)
import projectImage1 from "../images/YourMeal.png";
import projectImage2 from "../images/Registration_form.png";
import projectImage3 from "../images/counter.png";
import projectImage4 from "../images/Textutils.png";
import projectImage5 from "../images/snake.png";

// Array of projects
const projects = [
  {
    title: "Project One",
    image: projectImage1,
    description: "This is a description of Project One.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/yourprofile/project-one", // Update with actual GitHub URL
  },
  {
    title: "Project Two",
    image: projectImage2,
    description: "This is a description of Project Two.",
    technologies: ["React", "Node.js", "Express"],
    githubLink: "https://github.com/yourprofile/project-two", // Update with actual GitHub URL
  },
  {
    title: "Project Three",
    image: projectImage3,
    description: "This is a description of Project Three.",
    technologies: ["Python", "Django", "SQLite"],
    githubLink: "https://github.com/yourprofile/project-three", // Update with actual GitHub URL
  },
  {
    title: "Project Four",
    image: projectImage4,
    description: "This is a description of Project Four.",
    technologies: ["Ruby", "Rails", "PostgreSQL"],
    githubLink: "https://github.com/yourprofile/project-four", // Update with actual GitHub URL
  },
  {
    title: "Project Five",
    image: projectImage5,
    description: "This is a description of Project Five.",
    technologies: ["JavaScript", "React", "CSS"],
    githubLink: "https://github.com/yourprofile/project-five", // Update with actual GitHub URL
  },
  // Add more projects as needed
];

// ProjectCard component
const ProjectCard = ({ project }) => {
  return (
    <div className="certification-card">
      {/* Header with window controls and Project link */}
      <div className="card-header">
        <div className="window-controls">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="certification-link">
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
        className="certification-image"
      />

      {/* Project Details */}
      <h3 className="certification-title">{project.title}</h3>
      <p className="certification-description">{project.description}</p>
      <ul style={{ listStyleType: "none", paddingLeft: "10px", display: 'flex', flexWrap: 'wrap', margin: 0 }}>
        {project.technologies.map((tech, index) => (
          <li key={index} style={{ fontSize: "0.9rem", marginBottom: "5px", border: '1.5px solid black', borderRadius: '5px', padding: '3px', marginRight: '10px', background: 'rgb(240, 240, 240)' }}>
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
      <h2 className="slider-title">Projects</h2>

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
