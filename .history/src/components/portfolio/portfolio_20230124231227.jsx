import React from 'react'
import './portfolio.css'
import useFetch from '../../useFetch'

const Portfolio = () => {
  const {data, loading, error} = useFetch("https://thulana-port.fly.dev/api/collections/portfolio/records");
  const valuesArray = JSON.parse(data.items);
  if(loading) return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <h3>loading projects...</h3>
    </section>
  )
  if(error) console.log(error);
  render() {

  }
}

export default Portfolio