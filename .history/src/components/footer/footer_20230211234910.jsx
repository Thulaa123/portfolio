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
        <a href="https://www.facebook.com/thulana.vinnath.3"><FaFacebook/></a>
        <a href="https://www.instagram.com/_.thula.aa._/"><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/thulana-vinnath-288b53202/"><FaLinkedin/></a>
        <a href="https://www.linkedin.com/in/thulana-vinnath-288b53202/"><FaLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Thulana Vinnath, All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default footer