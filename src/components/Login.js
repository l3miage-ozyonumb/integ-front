import React, { useState } from 'react'
import '../css/login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';
import logo from '../images/parkin.png';



export const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await login(email, password);
        console.log(login)
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    };


  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <img src={logo} alt="Park-In Logo" className="login-logo" />
          <div className="app-name">Park-In</div>
        </div>
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Se connecter</button>
        </form>
        <div className="register-link">
          <p>Pas encore inscrit ? <a href="/register">Créer un compte</a></p>
        </div>
      </div>
    </div>
  )
}
