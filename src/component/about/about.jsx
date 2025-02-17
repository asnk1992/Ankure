import React from 'react'
import '../about/about.scss'

const About = () => {
  return (
    <>
    <div className="about" id='about' >
        <div className="about-img">
            <img src='src/assets/dp.png' alt=''/>
        </div>
        <div className="about-content">
            <div className="heading">Ankur Sharma</div>
            <h3>Frontend Developer</h3>
          <p>Passionate Frontend Developer with 3 years of experience in designing and implementing dynamic web applications. Proficient in HTML, CSS, and JavaScript, I focus on creating visually appealing and user-friendly interfaces. Skilled in collaborating with cross-functional teams to convert design concepts into responsive code, I optimize website performance to ensure a smooth user experience across platforms. Eager to leverage my technical expertise and creativity to contribute to impactful projects in innovative organizations.</p><a href='src/assets/Resume.pdf' className='btn'>Download Cv</a>
        </div>
    </div>
    </>
  )
}

export default About