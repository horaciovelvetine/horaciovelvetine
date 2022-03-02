import baseUrl from '../../config/baseUrl'
import axios from "axios"

export default async function getSearchResults(payload) {
  const response = await axios.post(baseUrl('/search', payload))
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
      debugger
    })
  console.log(response)
  debugger
  return response
}
