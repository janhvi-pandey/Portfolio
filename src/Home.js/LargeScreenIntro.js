import React from "react";
import {ReactTyped} from "react-typed";
import profile_pic from "../images/profile.jpg";

export default function LargeScreenIntro() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  };

  const contentStyle = {
    width: '60%',
    marginLeft: '10vh',
    justifyContent:'center',
    marginTop: '11vh',
    boxSizing: 'border-box',
    textAlign: 'left',
  };

  const imgContainerStyle = {
    width: '40%',
    justifyContent: 'center',
    marginRight: '10vh',
    marginTop: '11vh',
    marginLeft:'10vh',
    boxSizing: 'border-box',
  };

  const imgStyle = {
    borderRadius: '70%',
    width: '330px',
    height: '330px',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: '0 auto',
  };

  return (
    <div className="home-wrapper" style={containerStyle}>
      <div className="homeContent "  style={contentStyle}>
        <h5>
          <b>Hii!</b>
        </h5>
        <h1 style={{ color: "#660033", fontWeight: "bold", fontSize: "2.8rem" }}>
          I'm Janhvi Pandey
        </h1>
        <h4>
          A{" "}
          <span className="highlightHeading" id="typingtext">
            <ReactTyped
              strings={["Developer", "Designer", "Programmer"]}
              typeSpeed={100}
              loop
            />
          </span>
        </h4>
        <br />
        <h4 style={{ color: "#000", fontSize: "1.5rem" }}>
          <p>
            Coding with a purpose, designing with a vision, and building with
            precision.
          </p>
        </h4>
        <br />
        <h5>
          <p className="tagline" style={{ color: "#000" }}>
            My passion lies in the intersection of technology and creativity,
          </p>
          <p>where I turn complex problems into elegant solutions</p>
        </h5>
        <br />
        <button
          style={{
            color: "white",
            background: "#4d1933",
            borderRadius: "19px",
            border: "1px solid black",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "15px",
            paddingRight: "15px",
            fontWeight: "400",
          }}
        >
          Download Resume{" "}
          <i className="bi bi-instagram" style={{ color: "white", height: "5vh" }}></i>
        </button>
      </div>
      <div className="homeImg" style={imgContainerStyle}>
        <img
          src={profile_pic}
          alt="Profile"
          style={imgStyle}
        />
      </div>
    </div>
  );
}
