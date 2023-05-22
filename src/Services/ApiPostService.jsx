import axios from "axios"
import Cookies from "js-cookie"

async function ApiPostService(url, item) {
        let token = Cookies.get("user")
        console.log(token)
        try {
            let response = await axios.post(url + '/save', item, {headers: {Authorization: `Bearer ${JSON.parse(token)}`}})
            console.log(response)
        } catch (error) {
          console.log(error)
        }
}

export default ApiPostService