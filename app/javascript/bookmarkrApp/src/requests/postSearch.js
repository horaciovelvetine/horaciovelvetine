import baseUrl from '../../config/baseUrl'
import axios from "axios"

export default async function postSearch(payload, setMatchIds) {
  return await axios.post(`${baseUrl('/search')}`, payload)
}