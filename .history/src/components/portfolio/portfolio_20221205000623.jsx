import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG1 from '../../assets/portfolio2.jpg'
import IMG1 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG7 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">

          </div>
          <h3>This is the title</h3>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com/shots/popular/web-design' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default portfolio