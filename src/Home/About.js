import React, { useState } from "react";
import "./About.css"; // Import the CSS file
import SmallScreenabout from "./Smallscreenabout";

const headings = [
  {
    id: "quick-summary",
    label: "Quick Summary",
    content: (
      <div style={{ fontSize: "1.2rem", fontWeight: "500" }}>
        <p>
          A visionary B.Tech student and full-stack developer, I turn innovative
          concepts into impactful digital solutions. Proficient in HTML, CSS,
          JavaScript, and React, I craft seamless web applications with a focus
          on refined design and robust development. My collaborative approach
          and problem-solving skills ensure high-quality, scalable results.
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
          <strong>&#9733; Full Stack Developer Intern</strong>
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
          <strong>&#9733; Innovative Solutions</strong>
        </p>
        <p>
          &#8594; I provide creative, standout approaches tailored to each
          project.
        </p>

        <p>
          <strong>&#9733; Comprehensive Expertise</strong>
        </p>
        <p>
          &#8594; Proficient in both front-end and back-end development for
          complete web solutions.
        </p>

        <p>
          <strong>&#9733; Collaborative Precision</strong>
        </p>
        <p>
          &#8594; Strong teamwork and problem-solving skills ensure meticulous,
          high-quality results.
        </p>
      </div>
    ),
  },
];

export default function VerticalTabs() {
  const [activeTab, setActiveTab] = useState("quick-summary");

  return (
    <section
      className="d-flex flex-column" id="about"
      style={{ justifyContent: "center" }}
    >
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
