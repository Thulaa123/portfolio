import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import useFetch from '../../useFetch'

const Portfolio = () => {
  const {data, loading, error} = useFetch("https://thulana.graffon.lk/api/portfolio/v1/projects");
  if(loading) return <h1>Loading...</h1>
  if(error) console.log(error);
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,title,github,demo}) => )
        }
      </div>
    </section>
  )
}

export default Portfolio