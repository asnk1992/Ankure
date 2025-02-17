import React from 'react'
import '../hero/hero.scss'

const Hero = () => {
    return (
        <>
            <section className='hero' id='home'>
                <div className="hero-content">
                    <h3>
                        hellow its me
                    </h3>  
                    <h1>ankur sharma</h1>
                    <h3>i am a <span>frontend developer.</span></h3>
                    <p>Passionate Frontend Developer with 3 years of experience in designing and implementing dynamic web applications. Proficient in HTML, CSS, and JavaScript, with a strong focus on creating visually appealing and user-friendly interfaces. Skilled at collaborating with cross-functional teams to convert design concepts into responsive, functional code.</p>
                    <p>Demonstrated ability to optimize website performance and ensure a smooth user experience across various platforms and browsers. Eager to apply my technical expertise and creativity to contribute to impactful projects and support the growth of innovative organizations.</p>
              
              <div className="social-media">
                <a><i class='bx bxl-linkedin'></i></a>
               
              </div>
              
<a href='#'className='btn'>Download Cv</a>
                </div>
                <div className="hero-img">
                    <img src='src/assets/dp.png' alt=''></img>
                </div>
            </section>

        </>
    )
}

export default Hero