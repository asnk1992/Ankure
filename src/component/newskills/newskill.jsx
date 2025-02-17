import React from "react";
import '../newskills/style.scss'

const skills = [
  {
    // name: "Web Design",
    logo: "src/assets/Dashboard/image 1.png",
    // URL: "https://akshoptifibre.com/index.html"
  },
  {
    // name: "Web Development",
    logo: "src/assets/Dashboard/image 2.png",
    // URL: "https://akshoptifibre.com/index.html"
  },
  {
    // name: "User Experience",
    logo: "src/assets/Dashboard/image 3.png",
    // URL: "https://akshoptifibre.com/index.html"
  },
  {
    // name: "UI Testing",
    logo: "src/assets/Dashboard/image 4.png",
    // URL: "https://akshoptifibre.com/index.html"
  },
  {
    // name: "WordPress Solutions",
    logo: "src/assets/Dashboard/image 6.png",
    // URL: "https://akshoptifibre.com/index.html"
  },
  {
    // name: "Digital Marketing",
    logo: "src/assets/Dashboard/image 7.png",
    // URL: "https://akshoptifibre.com/index.html"
  },
  {
    // name: "Digital Marketing",
    logo: "src/assets/Dashboard/image 11.png",
    // URL: "https://akshoptifibre.com/index.html"
  },
  {
    // name: "Digital Marketing",
    logo: "src/assets/Dashboard/image 14.png",
    // URL: "https://akshoptifibre.com/index.html"
  },
  {
    // name: "Digital Marketing",
    logo: "src/assets/Dashboard/image 15.png",
    // URL: "https://akshoptifibre.com/index.html"
  },
  {
    // name: "Digital Marketing",
    logo: "src/assets/Dashboard/image 16.png",
    // URL: "https://akshoptifibre.com/index.html"
  },
  {
    // name: "Digital Marketing",
    logo: "src/assets/Dashboard/image 17.png",
    // URL: "https://akshoptifibre.com/index.html"
  },
  {
    // name: "Digital Marketing",
    logo: "src/assets/Dashboard/image 26.png",
    // URL: "https://akshoptifibre.com/index.html"
  }
];

const Newskill = () => {
  return (
    <>
      <div className="skill-containers">
        <div className="skills-title">My Skills</div>
        <div className="skills-container">
          {skills.map((item, index) => (
            <div className="skill" key={index}>
              <img src={item.logo} alt={item.name} className="project-logo" />
              <h3>{item.name}</h3>
              <a href={item.URL} target="_blank" rel="noopener noreferrer">
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Newskill;
