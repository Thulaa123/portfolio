import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Thulana Vinnath</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="#"><FaFacebook/></a>
        <a href="#"><FaInstagram/></a>
        <a href="#"><FaLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Thulana Vinnath, All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default footer