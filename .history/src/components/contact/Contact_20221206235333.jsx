import React, {useState} from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import axios from 'axios'
import e from 'cors'

const Contact = () => {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    platform: ""
  });
  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  function handle(e){
    const newdata ={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata);
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
        <form onSubmit={(e)=> submit(e)}>
          <input onChange={(e)=>handle(e)} id="name" value={data.name} type="text" name='name' placeholder='Please Enter your name' required/>
          <input onChange={(e)=>handle(e)} id="email" value={data.email} type="email" name='email' placeholder='Please Enter your email' required/>
          <textarea onChange={(e)=>handle(e)} id="comment" value={data.comment} name='comment' rows="7" placeholder="Your comment" required ></textarea>
          <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact