import React, { useState } from 'react'
import '../css/login.css'
import { Link } from 'react-router-dom';

export const Login = () => {
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



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
        <button onClick={() => console.log(email, password)}>Login</button>
        <Link to='/register'>
        <button>Register</button>
        </Link>
      </div>
    </div>
  )
}
