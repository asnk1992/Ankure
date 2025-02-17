import React from 'react'
import '../contac/style.scss'
const Contact = () => {
  return (
    <div className="contact">
      <h1 className='heading'>Contact <span>Me</span></h1>
      <form action='#'>
        <div className="input-box">
          <input type='text' placeholder='Full Name' />
          <input type='email' placeholder='Email' />
        </div>
        <div className="input-box">
          <input type='number' placeholder='Phone Number' />
          <input type='text' placeholder='Email Subject' />
        </div>
        <textarea cols='30' rows='10' placeholder='Your Message'></textarea>
        <input type='submit' value='Send Message' className='btn' />
      </form>
    </div>
  )
}

export default Contact
