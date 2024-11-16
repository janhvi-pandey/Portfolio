import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Certification from "./Certification";
import Contact from "./Contact";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const section = document.querySelector(sectionId);
      const navbarHeight = document.querySelector('.navbar').offsetHeight;

      if (section) {
        window.scrollTo({
          top: section.offsetTop - navbarHeight,
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

  return (
    <div>
      <div
        className="home-content"
        id="home"
        style={{
          paddingTop: "70px", // Offset for fixed navbar
        }}
      >
        <Intro />
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="certification">
          <Certification />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
