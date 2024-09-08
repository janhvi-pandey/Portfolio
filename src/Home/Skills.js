import React from "react";

const cardStyles = {
  background: 'linear-gradient(to right, #ffe6f2, #f8eefa)',
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  border: "1.5px solid grey",
 
  marginRight: "1rem",
  marginLeft: "1rem",
  transition: "transform 0.2s",
};

const cardHoverStyles = {
  
  transform: "scale(1.05)",
 
};

const headerStyles = {
  background: "linear-gradient(to right, #602040, #4d004d, #1a001a)",
  color: "white",
  display: "flex",
  alignItems: "center", // Center items vertically
  justifyContent: "center", // Center items horizontally
  height: "2.2rem", // Adjust height as needed
  padding: "1rem", // Add padding for spacing
  fontSize: "1rem", // Adjust font size as needed
  fontWeight: "600", // Bold text for emphasis
};

const listItemStyles = {
  marginBottom: "10px",
  fontWeight: "600",
};

const Skills = () => {
  // Data for the cards
  const cardsData = [
    {
      title: "Developer",
      skills: ["HTML 5", "CSS 3", "React", "NodeJS", "MongoDb","ExpressJs","Docker"],
    },
    {
      title: "Programmer",
      skills: ["C", "C++", "Java", "Python","JavaScript", "DSA", "SQL"],
    },
    {
      title: "Toolkit",
      skills: ["Canva", "Git", "GitHub","Firebase","Vercel","Bootstrap","VS Code"],
    },
  ];

  return (
    <section id="skills">
    <div className="container" >
      <h2
        className="text-center"    
        style={{
          fontSize: "2.3rem",
          marginTop: "2rem",
          marginBottom: "3rem",
          fontWeight: "bold",
          color: "#4d1a00",
      
        }}
      >
        Skills
      </h2>

      <div className="row">
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={cardStyles}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = cardHoverStyles.transform)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div className="card-header" style={headerStyles}>
                {card.title}
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  {card.skills.map((skill, idx) => (
                    <li key={idx} style={listItemStyles}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Skills;
