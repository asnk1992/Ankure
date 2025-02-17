import React from 'react'
import '../services/style.scss'

const Services = () => {
  return (
   <>
   
   <div className="services">
    <h2 className="heading">
        <span>services</span>
    </h2>
    <div className="services-container">
        <div className="services-box">
            <i className='bx bx-code-alt'></i>
            <h3>web development</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ipsum ut quo unde architecto officia ullam mollitia optio! Beatae doloribus, commodi nobis debitis nostrum tempora sunt vitae quibusdam fuga ipsam?</p>
        <a href='#' className='btn'>read more</a>
        </div>
        <div className="services-box">
        <i class='bx bx-paint'></i>
            <h3>graphic designing</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ipsum ut quo unde architecto officia ullam mollitia optio! Beatae doloribus, commodi nobis debitis nostrum tempora sunt vitae quibusdam fuga ipsam?</p>
        <a href='#' className='btn'>read more</a>
        </div>
        <div className="services-box">
        <i class='bx bx-bar-chart-alt'></i>
            <h3>digital marketing</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ipsum ut quo unde architecto officia ullam mollitia optio! Beatae doloribus, commodi nobis debitis nostrum tempora sunt vitae quibusdam fuga ipsam?</p>
        <a href='#' className='btn'>read more</a>
        </div>
        
    </div>
   </div>

   </>
  )
}

export default Services