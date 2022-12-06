import React, {useState} from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import axios from 'axios'

const Contact = () => {
  const url = ""
  const [data,setData] = useState({
    name: "",
    email: "",
    comment: "",
  })
  function handle(e){

  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vinnath112@gmail.com</h5>
            <a href='mailto:vinnath112@gmail.com'>Send a email</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>Thulana Vinnath</h5>
            <a href='https://m.me/thulana.vinnath.3'>Send a message</a>
          </article>
        </div>
        <form action="">
          <input on type="text" name='name' placeholder='Please Enter your name' required/>
          <input type="email" name='email' placeholder='Please Enter your email' required/>
          <textarea name='message' rows="7" placeholder="Your comment" required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact