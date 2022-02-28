import baseUrl from '../../config/baseUrl'
import axios from "axios"

export default async function postSearch(payload) {
  const response = await axios.post(`${baseUrl('/search')}`, payload)
  console.log(response)
  debugger
}