import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} dow>Download CV</a>
        <a href="#contact">Let's Chat</a>
    </div>
  )
}

export default CTA