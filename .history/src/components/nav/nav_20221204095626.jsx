import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <Nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about') } className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
    <>
  )
}

export default nav