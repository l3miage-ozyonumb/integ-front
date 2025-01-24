import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../css/header.css'
import logo from '../images/parkin.png'
import logo_login from '../images/user-interface.png'

export const Header = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };


  return (
    <div className='header'>
        <div className='logo-container-park'>
        <Link to='/'>
        <img src={logo} alt='logo-park' className='logo-park' />
        </Link>
        <span className='logo-text'>Park-In</span>
        </div>
        <div className='logo-container-login' onClick={toggleMenu}>
          <img src={logo_login} alt='logo-login' className='logo-login' />
        </div>
        {isMenuVisible &&
        <div className='menu'>
          <p className='menu-item'>item 1</p>
          <p className='menu-item'>item 2</p>  
          
        </div>}
  </div>
  )
}
