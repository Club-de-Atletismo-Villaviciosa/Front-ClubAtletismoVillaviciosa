import React from 'react'
import { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
      };

    return (
        <>
        <h1 className='LoginTitle'>Solo Para Administradores</h1>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="email" value={email} onChange={handleEmailChange} className='loginInput'/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} className='loginInput'/>
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    </>
    );
}

export default LoginPage
