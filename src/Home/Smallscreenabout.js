import React from "react";
import "./SmallScreenCards.css"; // Import the CSS file for styling

const headings = [
  {
    id: "quick-summary",
    label: "Quick Summary",
    content: (
      <div style={{ fontSize: "0.85rem", fontWeight: "450" }}>
        <p>
          I'm a final-year B.Tech CSE student at BBDITM, specializing in
          full-stack development with the MERN stack. I have experience in
          React, UI/UX design, and backend development. As a Competitive
          Programming Mentor with Google Developer Student Clubs, I lead
          hackathons and workshops, sharpening my leadership and problem-solving
          skills. I’m passionate about learning new technologies, creating
          secure & user-friendly digital interfaces.
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
            &#9733; MERN Stack Developer Intern
          </strong>
        </p>
        <p>&#8594; Softpro India Computer Technologies</p>
        <p>&#8594; August 2024 - September 2024</p>

        <p>
          <strong>&#9733; Competitive Programming Mentor</strong>
        </p>
        <p>&#8594; GDSC BBDITM</p>
        <p>&#8594; August 2023 - November 2024</p>
        <p>
          <strong>&#9733; IIC Convener </strong>
        </p>
        <p>&#8594; IIC BBDITM</p>
        <p>&#8594; January 2023 - January 2024</p>
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
          &#8594; Computer Science Engineering | 2021 - 2025 
          &#8594; Percentage: 92
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
            style={{ marginBottom: "5vh" }}
          >
            <div
              className="card h-100 shadow-sm small-screen-card"
              style={{ border: "2px solid black" }}
            >
              <div className="text-center" style={{ width: "100%" }}>
                <div className="card-header text-center small-screen-card-header">
                  {heading.label}
                </div>
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
