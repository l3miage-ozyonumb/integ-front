import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/header.css';
import logo from '../images/parkin.png';
import logo_login from '../images/user-interface.png';
import { useAuth } from '../firebase/AuthContext'; // useAuth hook'unu import ettik

export const Header = () => {
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { user, logout } = useAuth(); // AuthContext'ten user ve logout'u aldık

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleLogout = async () => {
    try {
      await logout(); // Kullanıcının oturumunu kapat
      setIsMenuVisible(false); // Menü kapanır
      alert('You have logged out.');
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
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
      {isMenuVisible && (
        <div className='menu'>
          {user ? ( // Kullanıcı giriş yapmışsa
          <>
           <Link to="/profil">
                <p className='menu-item'>Mon profil</p>
              </Link>
          <Link to="/reservations">
          <p className='menu-item'>Mes réservations</p>
          </Link>
            <p className='menu-item' onClick={handleLogout}>
              Se déconnecter
            </p>
            </>
          ) : ( // Kullanıcı giriş yapmamışsa
            <>
              <Link to='/login'>
                <p className='menu-item'>Se connecter </p>
              </Link>
              <Link to='/register'>
                <p className='menu-item'>S'inscrire</p>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};
