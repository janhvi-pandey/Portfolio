import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ReactTyped } from "react-typed";
import textutilmockup from "../images/TextUtils Mockup.png";
import newshubmockup from "../images/NewsHub Mockup.png";
import portfoliomockup from "../images/Portfolio Mockup.png";
import karammockup from "../images/Karam Mockup.png";
import SecretScriptmockup from "../images/SecretScript  Mockup.png";

import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

// Project data
const projects = [
  {
    name: "Karam: Customer Query Management",
    description:
      "It is a full-stack application that reflects the core values & ideals of Karam, featuring a Customer Query Management system. It includes sections for Home, Services, About, Contact, and Careers. The system allows users to submit and track queries, while admins can manage and update query statuses via seamless REST API integration. This project enhanced my full-stack development skills, particularly in MERN stack, API integration, and optimizing data flow and system performance.",
    preview: karammockup,
    techs: ["React", "MongoDB", "Node.js", "Express.js"],
    github:
      "https://github.com/janhvi-pandey/Karam-Customer-Query-Management-Frontend",
    live: "https://customer-query-management-frontend.vercel.app/",
    tags: [
      "Karam",
      "Customer Query Management",
      "mern stack",
      "full stack",
      "react",
      "mongo db",
      "express js",
      "node js",
      "vercel",
    ],
  },
  {
    name: "Portfolio",
    description:
      "My portfolio is a dynamic web application built with ReactJS and Firebase, designed to highlight my skills, projects, and professional experience. This project allowed me to strengthen my front-end development skills while learning to integrate real-time updates, creating an interactive and engaging platform for visitors to explore my work & connect with me.",
    preview: portfoliomockup,
    techs: ["React", "FireBase", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/janhvi-pandey/Portfolio",
    live: "https://janhvi-portfolio.web.app/",
    tags: ["portfolio", "janhvi", "janhvi portfolio", "react"],
  },
  {
    name: "Secret Script",
    description:
      "Secret Script is a secure, full-stack application for anonymous script management. The project aimed to combine privacy with a seamless user experience, allowing users to safely store and access their notes. Using modern technologies and secure REST APIs, I enhanced my skills in full-stack development, focusing on data security, API integration, and dynamic content management, all while ensuring an intuitive, responsive interface.",
    preview: SecretScriptmockup,
    techs: ["React", "MongoDB", "Node.js", "Express.js"],
    github: "https://github.com/janhvi-pandey/Secret-Script-Frontend",
    live: "https://secret-script-io.vercel.app/",
    tags: [
      "Secret Script",
      "Secret",
      "script",
      "mern stack",
      "full stack",
      "react",
      "mongo db",
      "express js",
      "node js",
      "vercel",
    ],
  },
  {
    name: "NewsHub",
    description:
      "NewsHub is a dynamic news platform that aggregates breaking news from multiple sources via NewsAPI. It features a user-friendly interface with global coverage, card-based layout, dark mode, and easy navigation by category and region. This project enhanced my skills in API integration, data fetching, and creating a responsive UI.",
    preview: newshubmockup,
    techs: ["React", "News API"],
    github: "https://github.com/janhvi-pandey/NewsHub",
    live: "https://github.com/janhvi-pandey/NewsHub",
    tags: ["react", "news", "newsHub"],
  },
  {
    name: "TextUtils",
    description:
      "A web based text-editor that allows users to perform various text manipulation tasks such as convert text to uppercase and lowercase, copy text, remove extra spaces, and clear the text field. It also provides a summary of the total word count, character count, and an estimate of the average reading time. Through this project, I gained practical experience with React's core concepts while focusing on building a user-friendly interface and efficient functionality.",
    preview: textutilmockup,
    techs: ["React", "GitHub", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/janhvi-pandey/TextUtils",
    live: "https://janhvi-pandey.github.io/TextUtils/",
    tags: ["TextUtils", "textutils", "text manipulation", "react"],
  },
];

const CatchyLine = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  width: 95%;
  // color: #333;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  margin-bottom: 2.5rem;
  color: #602040;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 95%;
  margin: auto;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:focus {
    border-color: #007bff;
  }
`;

const DropdownToggle = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ddd;
  background-color: white;
  z-index: 1;
  border-radius: 5px;
`;

const DropdownItem = styled.div`
  padding: 0.8rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

const Project = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1rem;
  padding-top: 2rem;
  margin-bottom: 4rem;
  border-bottom: 2px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectImage = styled.img`
  width: 50%;
  height: auto;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

const ProjectDetails = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectName = styled.h2`
  font-size: 2.05rem;
  font-weight: 550;
  margin-bottom: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.5;
  text-align: justify;
`;

const TechList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechName = styled.p`
  font-size: 14px;
  background-color: #f1f1f1;
  border-radius: 15px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  color: #333;
`;

const ProjectLinks = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0.5rem;
`;

const LinkIcon = styled.a`
  color: #000;
  font-size: 1.35rem;
  transition: 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const NoProjectsMessage = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  margin-top: 20px;
`;

function ExploreProject() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query === "") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          project.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  const handleProjectSelect = (project) => {
    setSearchQuery(project.name); // Set the selected project name to the search input
    setSelectedProject(project); // Update the selected project state
    setFilteredProjects([project]); // Show only the selected project
    setIsDropdownOpen(false); // Close the dropdown after selecting a project
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <CatchyLine>
        {" "}
        <ReactTyped
          strings={[
            "Bringing ideas to life, one project at a time",
            "Explore a curated collection of my projects, where code meets creativity",
            "Every project tells a story of learning, growing, and creating.",
            "Dive into the projects that fuel my passion for technology.",
          ]}
          typeSpeed={100}
          backSpeed={50}
          loop
        />
      </CatchyLine>
      <SearchContainer>
        <SearchInput
          ref={inputRef}
          type="text"
          placeholder="Search project..."
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={toggleDropdown} // Open dropdown when focused
        />
        <DropdownToggle onClick={toggleDropdown}>
          <FaCaretDown />
        </DropdownToggle>
        {isDropdownOpen && filteredProjects.length > 0 && (
          <DropdownContainer ref={dropdownRef}>
            {filteredProjects.map((project) => (
              <DropdownItem
                key={project.name}
                onClick={() => handleProjectSelect(project)}
              >
                {project.name}
              </DropdownItem>
            ))}
          </DropdownContainer>
        )}
      </SearchContainer>

      <ProjectsContainer>
        {selectedProject ? (
          <Project key={selectedProject.name}>
            <ProjectImage
              src={selectedProject.preview}
              alt={`${selectedProject.name} preview`}
            />
            <ProjectDetails>
              <ProjectName>{selectedProject.name}</ProjectName>
              <ProjectDescription>
                {selectedProject.description}
              </ProjectDescription>

              <TechList>
                {selectedProject.techs.map((tech, index) => (
                  <TechName key={index}>{tech}</TechName>
                ))}
              </TechList>

              <ProjectLinks>
                {selectedProject.github && (
                  <LinkContainer>
                    <LinkIcon
                      href={selectedProject.github}
                      target="_blank"
                      aria-label="GitHub Repo"
                    >
                      <FaGithub />
                    </LinkIcon>
                  </LinkContainer>
                )}
                {selectedProject.live && (
                  <LinkContainer>
                    <LinkIcon
                      href={selectedProject.live}
                      target="_blank"
                      aria-label="Live Website"
                    >
                      <FaEye />
                    </LinkIcon>
                  </LinkContainer>
                )}
              </ProjectLinks>
            </ProjectDetails>
          </Project>
        ) : filteredProjects.length === 0 ? (
          <NoProjectsMessage>No projects found</NoProjectsMessage>
        ) : (
          filteredProjects.map((project) => (
            <Project key={project.name}>
              <ProjectImage
                src={project.preview}
                alt={`${project.name} preview`}
              />
              <ProjectDetails>
                <ProjectName>{project.name}</ProjectName>
                <ProjectDescription>{project.description}</ProjectDescription>

                <TechList>
                  {project.techs.map((tech, index) => (
                    <TechName key={index}>{tech}</TechName>
                  ))}
                </TechList>

                <ProjectLinks>
                  {project.github && (
                    <LinkContainer>
                      <LinkIcon
                        href={project.github}
                        target="_blank"
                        aria-label="GitHub Repo"
                      >
                        <FaGithub />
                      </LinkIcon>
                    </LinkContainer>
                  )}
                  {project.live && (
                    <LinkContainer>
                      <LinkIcon
                        href={project.live}
                        target="_blank"
                        aria-label="Live Website"
                      >
                        <FaEye />
                      </LinkIcon>
                    </LinkContainer>
                  )}
                </ProjectLinks>
              </ProjectDetails>
            </Project>
          ))
        )}
      </ProjectsContainer>
    </>
  );
}

export default ExploreProject;
