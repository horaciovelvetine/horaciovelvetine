import baseUrl from '../../../config/baseUrl'
import axios from "axios"

export default async function updateLink(payload) {

  //==> Submits Create Link info to persist
  const response = await axios.put(baseUrl('/bookmarkr/link'), payload)

    .then((res) => {
      console.log(res)
      debugger
    })

    .catch((err) => {
      console.log(err)
      debugger
    })
  debugger
  return response
}