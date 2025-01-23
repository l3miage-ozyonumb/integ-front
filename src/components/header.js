import React from 'react'
import { Link } from 'react-router-dom';
import '../css/header.css'
import logo from '../images/parkin.png'

export const Header = () => {
  return (
    <div className='header'>
        <div className='logo-container'>
        <img src={logo} alt='logo' className='logo' />
        <span className='logo-text'>Park-In</span>
        </div>
        <div className='button-container'>
          <Link to='/cancel'>
          <button className='signup-button'>Button Annulation</button>
          </Link>
          <button className='login-button'>Button Login</button>
        </div>
  </div>
  )
}
