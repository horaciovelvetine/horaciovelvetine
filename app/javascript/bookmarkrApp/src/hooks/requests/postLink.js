import baseUrl from '../../../config/baseUrl'
import axios from "axios"

export default async function postLink(payload) {

  //==> Submits Create Link info to persist
  const response = await axios.post(baseUrl('/bookmarkr/link'), payload)

    .then((res) => {
      return res.data.data
    })

    .catch((err) => {
      console.log(err)
      debugger
    })

  return response.data
}