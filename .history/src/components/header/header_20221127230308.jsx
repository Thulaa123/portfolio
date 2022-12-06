import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Thulana Vinnath</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <div className='me'>
            <img src={Me} alt='me'/>
        </div>

        <a 
      </div>
    </header>
  )
}

export default header