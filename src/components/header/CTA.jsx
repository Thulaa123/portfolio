import React from 'react'
import CV from '../../assets/tv-cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className="btn">Download CV</a>
        <a href="https://tawk.to/chat/63905303b0d6371309d307b2/1gjls8i38" className='btn btn-primary'>Let's Chat</a>
    </div>
  )
}

export default CTA