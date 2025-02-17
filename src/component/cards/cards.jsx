import React from "react";
import "../cards/cards.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import { faSketch, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faCode, faUser, faFlask, faChartSimple } from "@fortawesome/free-solid-svg-icons";


const services = [  
  // git commit -m "first commit"

  {
    title: "Web Design",
    description: "Design an intuitive and visually appealing interface.",
    icon: <FontAwesomeIcon icon={faSketch} className="icon-gradient" size="3x" />,
     URL: "https://akshoptifibre.com/index.html"  
    
  },
  {
    title: "Web Development",
    description: "Create personalized and relevant digital experiences.",
    icon: <FontAwesomeIcon icon={faCode} className="icon-gradient" size="3x" />,
     URL: "https://akshoptifibre.com/index.html"
  },
  {
    title: "User Experience",
    description: "Focus on the needs and behaviors of users.",
    icon: <FontAwesomeIcon icon={faUser} className="icon-gradient" size="3x" />,
     URL: "https://akshoptifibre.com/index.html"
  },
  {
    title: "UI Testing",
    description: "Ensure test cases cover typical and edge cases.",
    icon: <FontAwesomeIcon icon={faFlask} className="icon-gradient" size="3x" />,
     URL: "https://akshoptifibre.com/index.html"
  },
  {
    title: "WordPress Solutions",
    description: "Useful for complex websites and content needs.",
    icon: <FontAwesomeIcon icon={faWordpress} className="icon-gradient"  size="3x" />,
     URL: "https://akshoptifibre.com/index.html"
  },
  {
    title: "Digital Marketing",
    description: "Useful for complex websites and content needs.",
    icon: <FontAwesomeIcon icon={faChartSimple} size="3x" />,
     URL: "https://akshoptifibre.com/index.html"
 },
];

const Cards = () => {
  return (
    <>
    <div className="card-containers ">
    <div className="cards-title">My Services</div>
    <div className="cards-container">
      {services.map((service, index) => (
        <div className="card" key={index}>
          <div className="icon">{service.icon}</div>
          <div className="card-content">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          </div>
       
        </div>
      ))}
    </div>
    </div>
       
    </>
  );
};

export default Cards;
