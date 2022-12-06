import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small>Experie</small>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          
        </div>
      </div>
    </section>
  )
}

export default Experience