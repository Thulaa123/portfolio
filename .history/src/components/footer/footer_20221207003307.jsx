import React from 'react'
import './footer.css'
import 

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Thulana Vinnath</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Linkedin</a>
      </div>
    </footer>
  )
}

export default footer