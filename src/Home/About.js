import React, { useState } from "react";
import "./About.css"; // Import the CSS file
import SmallScreenabout from "./Smallscreenabout";

const headings = [
  {
    id: "quick-summary",
    label: "Quick Summary",
    content: (
      <div style={{ fontSize: "1.1rem",fontWeight:'500' }}>
        <p>
          Hi, I'm Janhvi Pandey, a final-year B.Tech student at BBDITM with a
          passion for turning innovative ideas into stunning digital realities.
          As a full-stack developer, I thrive on creating dynamic and
          user-centric web applications. My expertise in HTML, CSS, JavaScript,
          and React allows me to craft seamless, interactive experiences that
          captivate users. Whether it's designing sleek interfaces or building
          robust back-end systems, I bring a holistic approach to development.
          Eager to push the boundaries of creativity and technology, I'm
          dedicated to helping businesses grow and succeed online with powerful,
          scalable solutions.
        </p>
      </div>
    ),
  },
  {
    id: "professional-journey",
    label: "Professional Journey",
    content: (
      <div>
        <p>
          <strong>
            &#9733; Full Stack Developer Intern 
          </strong>
        </p>
        <p>&#8594; Softpro Lucknow</p>
        <p>&#8594; July 2024 - Present</p>

        <p>
          <strong>&#9733; Competitive Programming Mentor</strong>
        </p>
        <p>&#8594; GDSC BBDITM</p>
        <p>&#8594; August 2023 - Present</p>
        <p>
          <strong>&#9733; IIC Convener </strong>
        </p>
        <p>&#8594; IIC BBDITM</p>
        <p>&#8594; January 2023 - Present</p>

        
      </div>
    ),
  },
  {
    id: "academic-background",
    label: "Academic Background",
    content: (
      <div>
        <p>
          <strong>
            &#9733; Babu Banarasi Das Institute Of Technology & Management
          </strong>
        </p>
        <p>&#8594; Bachelor of Technology</p>
        <p>
          &#8594; Computer Science Engineering | 2021 - 2025 | Percentage: 92
        </p>

        <p>
          <strong>&#9733; Rani Laxmi Bai Memorial School</strong>&nbsp;
        </p>
        <p>&#8594; Intermediate</p>
        <p>&#8594; PCM | 2020 | Percentage: 95</p>

        <p>
          <strong>&#9733; Rani Laxmi Bai Memorial School</strong>&nbsp;
        </p>
        <p>&#8594; High School</p>
        <p>&#8594; 2018 | Percentage: 95</p>
      </div>
    ),
  },
  {
    id: "why-choose-me",
    label: "Why Choose Me?",
    content: (
      <div>
        <p>
          <strong>&#9733; Passion for Innovation</strong>
        </p>
        <p>
          &#8594; I am driven by a passion for innovation and creativity. My
          goal is to bring unique and efficient solutions to the table, ensuring
          that every project stands out.
        </p>

        <p>
          <strong>&#9733; Comprehensive Skill Set</strong>
        </p>
        <p>
          &#8594; With expertise in HTML, CSS, JavaScript, and React, I offer a
          versatile skill set that covers both front-end and back-end
          development. This ensures that I can handle any aspect of a web
          development project.
        </p>

        <p>
          <strong>&#9733; Strong Collaboration Skills</strong>
        </p>
        <p>
          &#8594; I excel in collaborative environments and am adept at working
          with cross-functional teams. My communication skills ensure that all
          stakeholders are aligned and projects run smoothly.
        </p>

        <p>
          <strong>&#9733; Problem-Solving Mindset & Commitment</strong>
        </p>
        <p>
          &#8594; I thrive on solving complex problems. My analytical skills and
          logical approach help me tackle challenges effectively and find the
          best possible solutions. My attention to detail ensures that every
          aspect of the project is meticulously planned and executed, resulting
          in high-quality and polished final products.
        </p>
      </div>
    ),
  },
];

export default function VerticalTabs() {
  const [activeTab, setActiveTab] = useState("quick-summary");

  return (
    <section className="d-flex flex-column" style={{justifyContent: 'center'}}>
      <div className="headingPosition">
        <h1 className="main-heading">About Me</h1>
      </div>
      <div className="vertical-tabs-container">
        <div 
          className={`headings ${
            activeTab === "quick-summary" ? "active-home" : ""
          }`}
        >
          {/* changed button to div--no changes in functionality */}
          {headings.map((heading) => (
            <div
              key={heading.id}
              className={`heading ${activeTab === heading.id ? "active" : ""}`}
              onClick={() => setActiveTab(heading.id)}
            >
              {heading.label}
            </div>
          ))}
        </div>
        <div className="content">
          {headings.map((heading) => (
            <div
              key={heading.id}
              className={`content-item ${
                activeTab === heading.id ? "active" : ""
              }`}
            >
              {heading.content}
            </div>
          ))}
        </div>
      </div>
      <div className=" smallcontainer mt-4">
      <SmallScreenabout />
    </div>
    </section>
  );
}