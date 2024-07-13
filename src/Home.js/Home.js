import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        className="home-content"
        style={{
          background: '#d98cb3', // lighter complementary colors
          minHeight: '100vh', // Ensure it covers the full viewport height
          paddingTop: '70px'  // Add padding to offset the fixed navbar
        }}
      >
       <Intro/>
       
      </div>
    </div>
  );
}
