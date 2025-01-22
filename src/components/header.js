import React from 'react'
import '../css/header.css'
import logo from '../images/parkin.png'

export const Header = () => {
  return (
    <div className='header'>
        <div className='logo-container'>
        <img src={logo} alt='logo' className='logo' />
        <span className='logo-text'>Park-In</span>
        </div>
        <button className='login-button'>Button Login</button></div>
  )
}
