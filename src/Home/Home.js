import React from "react";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Project from "./project";
import Certification from "./Certification";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <div
        className="home-content" id="home"
        style={{
          paddingTop: "70px",
          // Add padding to offset the fixed navbar
        }}
      >
        <Intro />
        <About />
        <Skills />
        <Project />
        <Certification />
        <Contact />
      </div>
    </div>
  );
}
