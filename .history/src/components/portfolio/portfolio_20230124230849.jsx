import React from 'react'
import './portfolio.css'
import useFetch from '../../useFetch'

const Portfolio = () => {
  const {JSON.parse(myJSON)data, loading, error} = useFetch("https://thulana-port.fly.dev/api/collections/portfolio/records");
  if(loading) return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <h3>loading projects...</h3>
    </section>
  )
  if(error) console.log(error);
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.items[0]?.map(({collectionId,id,title,demo,image}) => {
            return (
              <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={`https://thulana-port.fly.dev/api/files/${collectionId}/${id}/${image}`} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio