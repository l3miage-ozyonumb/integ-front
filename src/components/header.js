import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../css/header.css'
import logo from '../images/parkin.png'
import logo_login from '../images/user-interface.png'

export const Header = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);


  return (
    <div className='header'>
        <div className='logo-container-park'>
        <Link to='/'>
        <img src={logo} alt='logo-park' className='logo-park' />
        </Link>
        <span className='logo-text'>Park-In</span>
        </div>
        <div className='logo-container-login' onMouseEnter={() => setIsMenuVisible(true)}
          onMouseLeave={() => setIsMenuVisible(false)}>
          <img src={logo_login} alt='logo-login' className='logo-login' />
          {isMenuVisible && (
            <div className='menu'
            onMouseEnter={() => setIsMenuVisible(true)} // Menü açık kalır
            onMouseLeave={() => setIsMenuVisible(false)} // Menü kapanır
            >
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </div>
          )}
        </div>
  </div>
  )
}
