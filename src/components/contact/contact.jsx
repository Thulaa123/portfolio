import React, { useRef } from 'react'
import './contact.css'
import { toast, Toaster } from 'sonner';
import emailjs from '@emailjs/browser'
import {MdOutlineMail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BiChat} from 'react-icons/bi'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7bs2g7x', 'template_rnl01pj', form.current, {
        publicKey: '74MBHL06kIkUmkyZH',
      })
      .then(
        () => {
          toast.success('Yay! 🥳, I got your response 🎉 ✉️');
        },
        (error) => {
          toast.error(error.text);
        },
      );
  };
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
          <article className="contact__option">
            <BiChat className='contact__option-icon'/>
            <h4>Quick Response</h4>
            <h5>Realtime chat</h5>
            <a href='https://tawk.to/chat/63905303b0d6371309d307b2/1gjls8i38'>Start chating</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Please Enter your name' required/>
          <input type="email" name="sender_email" placeholder='Please Enter your email' required/>
          <textarea name="message" rows="7" placeholder="Your comment" required ></textarea>
          <div class="g-recaptcha" data-sitekey="6Ld3YMQpAAAAANeMuidbu3he57UDxFri6K4syulJ"></div>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
        <Toaster position="top-center" richColors/>
      </div>
    </section>
  )
}

export default Contact