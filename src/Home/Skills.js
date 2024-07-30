import React from "react";
const cardStyles = {
  background: 'linear-gradient(to right,#f2f4f4,#ebedef ,#eaecee)',
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  border: "1px solid black",
  marginRight: "1rem",
  marginLeft: "1rem",
  transition: "transform 0.2s",
};
const cardHoverStyles = {
  transform: "scale(1.05)",
  border:"2px solid black", // Scale up the card on hover
};
const headerStyles = {
  background: "linear-gradient(to right, #602040, #4d004d, #1a001a)",
  // Replace with your navbar color
  color: "white",
  textAlign: "center",
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
      skills: ["HTML 5", "CSS 3", "JavaScript", "React", "Node.js", "Github"],
    },
    {
      title: "Programmer",
      skills: ["C", "C++", "Java", "Python", "DSA", "SQL"],
    },
    {
      title: "Designer",
      skills: ["Canva", "UI/UX ", "Figma", "Adobe Photoshop"],
    },
  ];

  return (
    <div className="container ">
      <h2
        className="text-center"
        style={{
          fontSize: "2.6rem",
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
  );
};
export default Skills;