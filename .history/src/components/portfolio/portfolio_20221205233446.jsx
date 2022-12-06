import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import useFetch from '../../useFetch'

const Portfolio = () => {
  const {} = userFetch()
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=''></img>
          </div>
          <h3>This is the title</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/shots/popular/web-design' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio