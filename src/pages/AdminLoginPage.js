import React, { useState } from 'react';
import { useAuth } from '../firebase/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../components/useAdmin';

export const AdminLoginPage = () => {
    const { login } = useAuth();
    const { isAdmin } = useAdmin();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            if (isAdmin) {
                navigate('/admin-dashboard'); // Admin sayfasına yönlendir
            } else {
                alert("Unauthorized: You are not an admin.");
            }
        } catch (error) {
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Admin Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
