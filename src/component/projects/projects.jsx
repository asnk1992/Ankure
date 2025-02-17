import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../projects/style.scss";

const projects = [
  { image: "public/assets/Dashboard/image 1.png" },
  { image: "public/assets/Dashboard/image 2.png" },
  { image: "public/assets/Dashboard/image 3.png" },
  { image: "public/assets/Dashboard/image 4.png" },
  { image: "public/assets/Dashboard/image 6.png" },
  { image: "public/assets/Dashboard/image 7.png" },
  { image: "public/assets/Dashboard/image 11.png" },
  { image: "public/assets/Dashboard/image 14.png" },
  { image: "public/assets/Dashboard/image 15png" },
  { image: "public/assets/Dashboard/image 16.png" },
  { image: "public/assets/Dashboard/image 17.png" },
  { image: "public/assets/Dashboard/image 1.png" },
];


const workedon = [
    { image: "spublic/assets/13.png" },
    { image: "public/assets/aksh.png" },
    { image: "public/assets/cropped-cr.webp" },
    { image: "public/assets/sst.jpg" },
    { image: "public/assets/logo1.png" },
    { image: "public/assets/Dashboard Phase 5/SUREPEOPLE LOGO.png" },
    { image: "public/assets/Dashboard Phase 5/Vector (1).png" },
    { image: "public/assets/Dashboard Phase 5/Vector.png" },
  
  ];


const Projects = () => {
  const cardContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const carouselRef = useRef(null); // Reference for the carousel container

  // useEffect(() => {
  //   // Animate the carousel to create an infinite loop
  //   const scrollCarousel = () => {
  //     gsap.to(carouselRef.current, {
  //       x: "-100%", // Move the carousel to the left
  //       duration: 10, // Duration of the animation
  //       ease: "none", // No easing for a smooth linear motion
  //       repeat: -1, // Repeat infinitely
  //       repeatDelay: 0, // No delay between loops
  //     });
  //   };

  //   scrollCarousel(); // Start the animation when the component mounts
  // }, []);

  return (
    <>
      <div className="cards-outer">
        <div className="cards-title">My Skills</div>
        <div className="pcard-container" ref={cardContainerRef}>
          <div className="pcard-inner">
            {projects.map((project, index) => (
              <div
                key={index}
                className="pcard"
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <img
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  className="card-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      {/* <div className="carousel-container">
        <div className="carousel" ref={carouselRef}>
          {workedon.map((workedon, index) => (
            <div key={index} className="carousel-item">
              <img
                src={workedon.image}
                alt={`Carousel Image ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Projects;
