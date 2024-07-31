import React from "react";
import "./SmallScreenCards.css"; // Import the CSS file for styling

const headings = [
  {
    id: "quick-summary",
    label: "Quick Summary",
    content: (
      <div style={{ fontSize: "0.85rem", fontWeight: "450" }}>
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
          <strong>
            &#9733; Full Stack Developer Intern at Softpro Lucknow
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

const SmallScreenCards = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {headings.map((heading) => (
          <div
            key={heading.id}
            className="col-12 "
            style={{ marginBottom: "10vh" }}
          >
            <div
              className="card h-100 shadow-sm small-screen-card"
              style={{ border: "2px solid black" }}
            >
              <div
                className="card-header small-screen-card-header"
                style={{ fontWeight: "500" }}
              >
                {heading.label}
              </div>
              <div className="card-body" style={{ fontWeight: "400" }}>
                {heading.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallScreenCards;
