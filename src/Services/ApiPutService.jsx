import axios from "axios"


async function ApiPutService(url, item, id) {
  try {
    let res = await axios.put(url + '/update/' + id, item)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

export default ApiPutService