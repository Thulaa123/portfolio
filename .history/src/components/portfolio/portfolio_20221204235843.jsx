import React from 'react'
import './portfolio.css'

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
          <a href='https://github.com' className='btn'>Github</a>
          <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default portfolio