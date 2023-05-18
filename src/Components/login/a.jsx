//import React from 'react'
import {  useState,useEffect } from "react";
import React, { useRef } from 'react';
import axios from "axios";
import Home from '../components/Home';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import  useContext from 'react';
import { AuthContext } from "./AuthContext";
function LoginForm1() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const inputRef = useRef(null);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const [token, setToken] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(AuthContext);
  /*   const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    }; */
    /* async function login(event) {
       event.preventDefault();
      // Objeto con los datos de inicio de sesión
      const loginData = {
        username: username,
        password: password
      };
      // Realizar la petición POST
      axios.post("http://localhost:8082/api/auth/signin", loginData)
        .then(response => {
          // Lógica a realizar después de que se haya completado el inicio de sesión
          console.log(response.data);
          console.log(response.data.accessToken);
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data.tokenType));
            setToken(response.data.accessToken);
          }
          e
            console.log(token);
            console.log(localStorage.getItem("user"));
          }
        })
        .catch(error => {
          // Manejo de errores
          console.error(error);
        });
    }     */
    async function login(event) {
        event.preventDefault();
        // Objeto con los datos de inicio de sesión
        const loginData = {
          username: username,
          password: password
        };
        try {
          const response = await axios.post("http://localhost:8082/api/auth/signin", loginData);
          localStorage.setItem("user", JSON.stringify(response.data.tokenType));
          Cookies.set("user", JSON.stringify(response.data.tokenType), { expires: 1 });
          setIsLoggedIn(true)
          navigate('/home');
          console.log(localStorage.getItem("user"));
          console.log(Cookies.get('user'))
        } catch (error) {
          alert("Usuario o contraseña incorrectos")
          setUsername("");
          setPassword("");
          // Manejo de errores
          console.error(error);
        }
      }
      const handleLogout = () => {
        // Realiza las acciones necesarias para cerrar sesión, como eliminar el token de autenticación del almacenamiento local (localStorage) o enviar una solicitud al servidor para invalidar la sesión.
        // Por ejemplo:
        localStorage.removeItem('user');
        Cookies.remove("user");
        setToken(false)
        window.location.reload();
        // Otras acciones necesarias, como redirigir al usuario a la página de inicio de sesión.
        // Por ejemplo:
       // navigate('/home');
       console.log(isLoggedIn)
      };
  return (
    <div>
        {token ? (
        <p>Conectado como administrador</p>
      ) : (
        <p>Conectado como user</p>
      )}
        <h1>PAGINA ADMINISTRADOR</h1>
            <div className="container">
            <div className="row">
             <hr/>
             </div>
             <div className="row">
             <div className="col-sm-6">
            <form className="form">
        <div className="form-group">
          <label>Email *</label>
          <input type="text"  className="form-control" id="username"  ref={inputRef} placeholder="Enter email"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          />
        </div>
        <div style={{ display: error ? "block" : "none", color: "red" }}>
          <p>La cuenta o la contraseña es incorrecta inténtelo de nuevo</p>
        </div>
        <div className="form-group">
            <label>password*</label>
            <input type="password"  className="form-control" id="password" placeholder="Enter password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            />
          </div>
                  <button type="submit" className="btn btn-primary"  onClick={login}>Login</button>
                  <button onClick={handleLogout}>
                          Cerrar sesión
                  </button>
              </form>
            </div>
            </div>
            </div>
            {/* <Home isLogged={isLogged}/> */}
    </div>
  )
        }
export default LoginForm1;