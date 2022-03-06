import baseUrl from '../../../config/baseUrl'
import axios from "axios"

export default function postLink(payload) {
  const response = await axios.post(baseUrl('/link'), payload)
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
      debugger
    })
  return response.data
}