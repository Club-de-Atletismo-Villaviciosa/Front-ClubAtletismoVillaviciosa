import React from 'react'
import { useState } from 'react';
import './LoginPage.css';
import ApiLoginService from '../../Services/ApiLoginService';
import { useContext } from 'react';
import { AuthContext } from '../../Services/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

function LoginPage() {
    const [data, setData] = useState({username: "", password: ""})
    let {setIsLogged} = useContext(AuthContext)
    let navigate = useNavigate()


    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let temp_data = { ...data };
        if (value !== undefined) {
            temp_data[name] = value;
        }
        setData(temp_data);
    }

      const handleSubmit = (e) => {
        e.preventDefault();
        ApiLoginService("http://localhost:8080/api/v1/auth", data, setIsLogged, navigate)
      };

    return (
        <>
        <Navbar />
        <h1 className='LoginTitle'>Solo Para Administradores</h1>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="email" name="username" value={data.username} onChange={handleChange} className='loginInput'/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={data.password} onChange={handleChange} className='loginInput'/>
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    </>
    );
}

export default LoginPage
