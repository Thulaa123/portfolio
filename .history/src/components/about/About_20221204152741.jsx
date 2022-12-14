import React from 'react'
import './about.css'
import ME from '../../assets/a'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about_me-image">
            <img src="../../" alt="" />
          </div>
        </div>
        <div className="about__content"></div>
      </div>
    </section>
  )
}

export default About