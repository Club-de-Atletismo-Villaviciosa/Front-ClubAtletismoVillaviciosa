import axios from "axios"
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

async function ApiLoginService(url, item, setIsLogged, navigate) {
        try {
            let response = await axios.post(url + '/signin', item)
            Cookies.set("user", JSON.stringify(response.data.accessToken), { expires: 1 });
            setIsLogged(true)
            navigate('/');
        } catch (error) {
          alert("Usuario o contraseña incorrectos")
        }
}

export default ApiLoginService