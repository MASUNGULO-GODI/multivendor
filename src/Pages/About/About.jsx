import React from 'react'
import rightimg from '../../asssets/aside_img.png'
import '../CSS/About.css'
const About = () => {
  return (
    <>
    <div className='About'>
      <div className="Story">
        <span>Our Story</span>
        <p>kusasa Technology Solution is a company specializing in Information, Communication, and Technology (ICT) training and consulting services. Our success is driven by the diverse and specialized services we offer to our clients.
        </p>
        <p>
        We operate with best practices in General Management, Finance, Human Resources, and Customer Care, providing a wide range of services including ICT hardware and software solutions, applications development, networking, data communication, soft skills training, and ICT certifications. </p>
      </div>
      <div className="right_img">
        <img src={rightimg} alt="" />
      </div>
    
    
    </div>


</>
  )
}

export default About
