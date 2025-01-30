import React, { useState } from 'react';
import '../css/register.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';
import logo from '../images/parkin.png';
import axios from 'axios';

////AJOUTE ICI FETCH API ADD CONDUCTEUR
export const Register = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { register } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      // After successful registration, create the conducteur
      await axios.post('http://localhost:2200/conducteur', {
        email,
        motdepass: password,
        nom: surname,
        prenom: name,
        telephone: phoneNumber
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert("Registration successful");
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <div className="register-container">
    <div className="register-box">
      <div className="logo-container">
        <img src={logo} alt="Park-In Logo" className="register-logo" />
        <div className="app-name">Park-In</div>
      </div>
      <h2>Inscription</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Prénom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nom"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Numéro de téléphone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="button-register" type="submit">S'inscrire</button>
      </form>
      <div className="login-link">
        <p>Vous avez déjà un compte ? <a href="/login">Se connecter</a></p>
      </div>
    </div>
  </div>
  );
};