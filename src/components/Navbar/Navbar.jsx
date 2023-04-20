import React from 'react'
import './navbar.css'
import logo from '../../images/logo.png'

const Navbar = () => {
  return (
    <div className='navbar__container'>
      <img className='navbar__logo' src={logo} alt='logo' />
      <p>SPACE PLAN Construction & Management LLC</p>
      <ul className='navbar__ul'>
        <li>Home</li>
        <li>Projects</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar