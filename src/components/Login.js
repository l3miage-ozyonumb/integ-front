import React, { useState } from 'react'
import '../css/login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';




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
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Login</button>
        <Link to='/register'>
        <button>Register</button>
        </Link>
      </div>
    </div>
  )
}
