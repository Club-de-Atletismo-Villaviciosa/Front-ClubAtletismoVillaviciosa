import axios from "axios";
import Cookies from "js-cookie";

async function ApiGetByIdService(url, id){
  let token = Cookies.get("user")
  let response = await axios.get(url + `/${id}`, {headers: {Authorization: `Bearer ${JSON.parse(token)}`}})
  return response.data
}

export default ApiGetByIdService;