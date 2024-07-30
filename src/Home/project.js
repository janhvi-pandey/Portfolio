import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
    title: "Project Four",
    image: projectImage5,
    description: "This is a description of Project Four.",
    technologies: ["Ruby", "Rails", "PostgreSQL"],
    githubLink: "https://github.com/yourprofile/project-four", // Update with actual GitHub URL
  },
  // Add more projects as needed
];

// ProjectCard component
const ProjectCard = ({ project, style }) => {
  return (
    <div className="project-card" style={style}>
      {/* Header with window controls and GitHub link */}
      <div
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
            href={project.githubLink} // Use the project’s GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
          >
            <FaGithub size={25} />
          </a>
        </div>
      </div>

      {/* Image */}
      <img
        src={project.image}
        alt={`${project.title} preview`}
        style={{
          width: "100%",
          height: "50%",
          borderTop: '1px solid white',
          borderBottom: '1px solid black',
          marginBottom: "10px",
        }}
      />

      {/* Project Details */}
      <h3 style={{ fontSize: "1.8rem", margin: "10px 0", paddingLeft: '10px' }}>
        {project.title}
      </h3>
      <p style={{ fontSize: "1rem", marginBottom: "10px", paddingLeft: '10px' }}>
        {project.description}
      </p>
      <ul style={{ listStyleType: "none", paddingLeft: "10px", display: 'flex', flexDirection: 'row' }}>
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
        Projects
      </h2>

      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} style={{ width: '100%' }}>
            <ProjectCard
              project={project}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
                width: "90%",
                margin: '5%',
                height: "auto",
                transition: "transform 0.3s ease",
                cursor: "pointer",
                border: "2px solid black",
              }}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ProjectSlider;
