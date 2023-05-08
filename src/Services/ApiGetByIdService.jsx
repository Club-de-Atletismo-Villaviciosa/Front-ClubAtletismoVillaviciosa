import axios from "axios";

async function ApiGetByIdService(url, id){
  let response = await axios.get(url + `/${id}`)
  return response.data
}

export default ApiGetByIdService;