import baseUrl from "../../config/baseUrl"
import axios from "axios"


export default async function fetchCache() {
  const request = await axios.get(`${baseUrl()}`)
    .then((response) => {
      const tags = response.data.data.attributes.tags
      const links = response.data.data.attributes.links
    })
    .catch((error) => {
      //handles an error
      console.log(error, "Mayday, mayday, cache not fetched, I repeat, cache not fetched all hands, all hands, man your keyboards.")
    })
  return request
}