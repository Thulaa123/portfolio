import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderScrolls from './HeaderScrolls'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Thulana Vinnath</h1>
        <h5 className="text-light">Full stack Developer</h5>
        <CTA />
        <HeaderScrolls />

        <div className='me'>
            <img src={Me} alt='me'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default header