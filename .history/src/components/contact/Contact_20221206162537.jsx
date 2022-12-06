import React from 'react'
import './contact.css'
import {MdOutlineMail} from ''

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact_option">
            <h4>Email</h4>
            <h5>vinnath112@gmail.com</h5>
            <a href='mailto:vinnath112@gmail.com'>Send a email</a>
          </article>
        </div>
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact