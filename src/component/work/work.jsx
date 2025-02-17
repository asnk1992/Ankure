import React from "react";
import '../work/style.scss'

const works = [
  {
    // name: "Web Design",
    logo: "src/assets/logos/sp.png",
    // URL: "https://akshoptifibre.com/index.html"
  },
  {
    // name: "Web Development",
    logo: "src/assets/logos/vector.png",
    // URL: "https://akshoptifibre.com/index.html"
  },
  {
    // name: "User Experience",
    logo: "src/assets/logos/13.png",
    // URL: "https://akshoptifibre.com/index.html"
  },
  {
    // name: "UI Testing",
    logo: "src/assets/logos/logo1.png",
    // URL: "https://akshoptifibre.com/index.html"
  },
  {
    // name: "WordPress Solutions",
    logo: "src/assets/logos/aksh.png",
    // URL: "https://akshoptifibre.com/index.html"
  },
  {
    // name: "Digital Marketing",
    logo: "src/assets/logos/sst.jpg",
    // URL: "https://akshoptifibre.com/index.html"
  },
 
 
];

const Works = () => {
  return (
    <>
      <div className="work-containers">
        <div className="works-title">Project Worked On</div>
        <div className="works-container">
          {works.map((item, index) => (
            <div className="work" key={index}>
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

export default Works;
