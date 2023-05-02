import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Aboutme Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>6+ Local</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            I’m Thulana, a software engineer at Ceyleon Solutions. Highly motivated individual with a strong foundation in software engineering and programming principles.  An individual with the ability to transform your business requirements into technical solutions. Proficient in Flutter, Javascript, React, HTML, CSS and embedded systems, with an innate ability to learn and master new technologies.. An excited individual to implement and launch new projects
          </p>
          <a href='https://tawk.to/chat/63905303b0d6371309d307b2/1gjls8i38' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About