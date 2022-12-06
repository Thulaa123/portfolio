import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact_option">
            <MdOutlineMail/>
            <h4>Email</h4>
            <h5>vinnath112@gmail.com</h5>
            <a href='mailto:vinnath112@gmail.com'>Send a email</a>
          </article>
          <article className="contact_option">
            <BsMessenger/>
            <h4>Messanger</h4>
            <h5>Thulana Vinnath</h5>
            <a href='https://m.me/thulana.vinnath.3'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+94767711340</h5>
            <a href=''>Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Please Enter your name' required/>
          <input type="email" name='email' placeholder='Please Enter your email' required/>
          <textarea name=''
        </form>
      </div>
    </section>
  )
}

export default Contact