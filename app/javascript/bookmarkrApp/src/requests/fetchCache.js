import baseUrl from "../../config/baseUrl"
import axios from "axios"


export default async function fetchCache() {
  const request = async () => await axios.get(`${baseUrl()}`)
    .then((response) => {
      return response
    })
    .catch((error) => {
      //handles an error
      console.log(error, "Mayday, mayday, cache not fetched, I repeat, cache not fetched all hands, all hands, man your keyboards.")
      debugger
    })
  puts("Uh oh, how'd you end up there...")
  debugger
}