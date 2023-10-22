import React from 'react'
import './Logo.css';
import logo from '../../assets/logo.jpg';

export default function Logo() {
  return (
    <div className="logo">
        <img className='logo-img' src={logo} alt="" />
        <div className="logo-text">10 listpada<br/>Święto Niepodległości</div>
    </div>
  )
}
