import axios from "axios"
import Cookies from "js-cookie"

async function ApiPutService(url, item, id) {
  let token = Cookies.get("user")
  try {
    let res = await axios.put(url + '/update/' + id, item, {headers: {Authorization: `Bearer ${JSON.parse(token)}`}})
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

export default ApiPutService