import baseUrl from '../../../config/baseUrl'
import axios from "axios"

export default async function postLink(payload) {
  debugger

  //==> Create Post Action for Link Groups
  const response = await axios.post(baseUrl('/bookmarkr/linkGroup'), payload)
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
      debugger
    })
  return response.data
}