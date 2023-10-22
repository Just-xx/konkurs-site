import React from 'react'
import './HeroLogo.css'
import logo from "../../assets/logo.jpg"

export default function HeroLogo() {
  return (
    <div className='hero-logo'>
      <img src={logo} alt="" className='hero-logo-img' />
      <span className="hero-logo-text">11 listopada<br/>Święto Niepodległości</span>
    </div>
  )
}
