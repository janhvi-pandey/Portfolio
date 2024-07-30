import React from 'react';
import { ReactTyped } from 'react-typed';
import profilepic from '../images/profile.jpg';
import Sidebar from "./Sidebar";

function Intro() {
  const commonStyles = {
    textAlign: 'left',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    marginBottom: '6vh',
  };

  return (
    <div>
      {/* Large Devices */}
      <div className="d-none d-lg-flex flex-row align-items-center" style={{ height: '80vh', }}>
        <div className="flex-grow-1" style={{ ...commonStyles }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
            <b>Hi, I'm</b>
          </h4>
          <h1 style={{ color: '#660033', fontWeight: 'bold', fontSize: '3.2rem' }}>Janhvi Pandey</h1>
          <h4 style={{ fontSize: '1.8rem', marginTop: '10px', marginBottom: '4px' }}><b>A <span className="highlightHeading" id="typingtext">
            <ReactTyped strings={['Developer', 'Designer', 'Programmer']} typeSpeed={100} loop />
          </span></b></h4>
          <br></br>
          <h4 style={{ color: " #800000", fontWeight: "bold", marginBottom: '3vh' }}><p>Coding with a purpose, designing with a vision, and building with precision.</p></h4>

          <h5 style={{ fontSize: '1.2rem', color: "#000" }}><p className="tagline">My passion lies in the intersection of technology and creativity,</p><p> where I turn complex problems into elegant solutions.</p></h5>
          <br></br>
          <button
            className="btn"
            style={{
              color: 'white',
              background: '#4d1933',
              borderRadius: '19px',
              border: '1px solid black',
              padding: '10px 22px',
              fontWeight: '500',
              marginTop: '20px',
            }}
          >
            Download Resume <i className="bi bi-instagram" style={{ color: 'white', marginLeft: '10px' }}></i>
          </button>
        </div>
       
        <div className="flex-grow-1 d-flex justify-content-center">
          <img src={profilepic} alt="Profile" style={{ borderRadius: '20%', width: '250px', height: '250px', marginBottom: '4vh' }} />
        </div>
        <div className="d-flex align-items-end justify-content-end" style={{ flex: '0 0 auto', marginLeft: 'auto', padding: '0 20px' }}>
          <Sidebar />
        </div>
      </div>

      {/* Small Devices */}
      <div className="d-lg-none d-flex flex-column align-items-center" style={{ padding: '0%', marginTop: '1.5vh' }}>
        <div className="mb-4">
          <img src={profilepic} alt="Profile" style={{ borderRadius: '20%', width: '185px', height: '185px' }} />
        </div>
        <div style={{ textAlign: 'left', marginTop: '2vh' }}>
          <h4 style={{ fontSize: '1rem', marginBottom: '3px', justifyContent: 'center' }}>
            <b>Hi, I'm</b>
          </h4>
          <h1 style={{ color: '#660033', fontWeight: 'bold', fontSize: '2.2rem' }}>Janhvi Pandey</h1>
          <h4 style={{ fontSize: '1.3rem' }}><b>A <span className="highlightHeading" id="typingtext">
            <ReactTyped strings={['Developer', 'Designer', 'Programmer']} typeSpeed={100} loop />
          </span></b></h4>
          
          <h4 style={{ color: " #660000", fontWeight: "bold",fontSize:'1.2rem' }}><p>Coding your vision -one pixel at a time.</p></h4>

          <h5 style={{  color: "#000" ,fontSize:'0.9rem'}}><p className="tagline" >My passion lies in the intersection of creativity & technology, where I turn complex problems into elegant solutions</p></h5>
          
          <button
            className="btn"
            style={{
              color: 'white',
              background: '#4d1933',
              borderRadius: '13px',
              border: '1px solid black',
              padding: '10px 20px',
              fontWeight: '500',
              marginTop:'4px',
              paddingBottom:'1.5vh',
            }}
          >
            Download Resume <i className="bi bi-instagram" style={{ color: 'white' }}></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;