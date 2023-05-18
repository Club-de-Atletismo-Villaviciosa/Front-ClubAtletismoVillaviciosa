import React, { useEffect, useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm1 from './LoginForm1';
import Cookies from 'js-cookie';
import { AuthContext } from './AuthContext'
export default function Home() {
 // const [token,setToken]=useState("");
  const [existeLocalStorage, setExisteLocalStorage] = useState(false);
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  useEffect(() => {
    // Comprobar si hay algo en el localStorage al cargar el componente
    const valor=Cookies.get("user")
    console.log(Cookies.get('user'));
    if (valor) {
      setExisteLocalStorage(true);
    }
  }, []);
  const handleLogout = () => {
    console.log("has pulsado el boton")
    // Realiza las acciones necesarias para cerrar sesión, como eliminar el token de autenticación del almacenamiento local (localStorage) o enviar una solicitud al servidor para invalidar la sesión.
    // Por ejemplo:
    setIsLoggedIn(false);
    localStorage.removeItem('user');
    Cookies.remove("user");
    // Otras acciones necesarias, como redirigir al usuario a la página de inicio de sesión.
    // Por ejemplo:
    navigate('/home');
    window.location.reload();
  };
  console.log(isLoggedIn);
  //Login()
  return (
    <div>
  <h1>PÁGINA HOME</h1>
  {isLoggedIn ? (
    <div>
      <p>Conectado como administrador</p>
      <button>Editar</button>
    </div>
  ) : (
    <div>
      {/* {token ? (
        <button>Botón</button>
      ) : (
        <p>No se recibió un token.</p>
      )} */}
      {<p>Conectado como user</p>}
    </div>
  )}
   <button onClick={handleLogout}>Salir </button>
</div>
  )
}