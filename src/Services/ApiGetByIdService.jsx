import axios from "axios";
import Cookies from "js-cookie";

async function ApiGetByIdService(url, id){
  let response = await axios.get(url + `/${id}`)
  return response.data
}

export default ApiGetByIdService;