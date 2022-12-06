import React from 'react'
import './header.css'
import CTA from './CTA'
im

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Thulana Vinnath</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <div className='me'>
            <img src="" alt=''/>
        </div>
      </div>
    </header>
  )
}

export default header