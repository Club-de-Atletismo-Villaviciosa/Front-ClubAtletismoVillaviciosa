import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


async function ApiDeleteService(url, id) {
    let token = Cookies.get("user")

    try {
        await axios.delete(url + `/delete/${id}`, {headers: {Authorization: `Bearer ${JSON.parse(token)}`}})
    } catch (error) {
        console.log(error)
    }
}

export default ApiDeleteService;