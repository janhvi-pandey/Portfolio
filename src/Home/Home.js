import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Project from './project';
import CertificationSlider from "./CertificationSlider";
import Contact from './Contact';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        className="home-content container"
        style={{
          minHeight: '100vh', // Ensure it covers the full viewport height
          paddingTop: '70px'
            // Add padding to offset the fixed navbar
        }}
      >
       <Intro/>
       
       <About/>
       <Skills/>
       <Project/>
       <CertificationSlider/>
       <Contact/>
      
       
      </div>
    </div>
  );
}
