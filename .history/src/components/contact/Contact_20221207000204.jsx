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
    comment: ""
  });
  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(
        "https://getform.io/f/b22f10be-75a6-40c0-9ec6-3519dc38fe29",
        formData,
        { headers: { Accept: "application/json" } }
      )
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          name: "",
          email: "",
          comment: ""
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
        </div>
        <div>
          
        </div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange()} id="name" value={query.name} type="text" name='name' placeholder='Please Enter your name' required/>
          <input onChange={handleChange()} id="email" value={query.email} type="email" name='email' placeholder='Please Enter your email' required/>
          <textarea onChange={handleChange()} id="comment" value={query.comment} name='comment' rows="7" placeholder="Your comment" required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact