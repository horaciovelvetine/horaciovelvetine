import baseUrl from "../../../config/baseUrl"
import axios from "axios"


export default async function fetchCache() {

  //===> Gets information for tags and bookmarks to lookup/populate components
  const response = await axios.get(`${baseUrl('/bookmarkr')}`)

    .then((response) => {
      return response
    })

    .catch((error) => {
      //handles an error
      console.log(error, "Mayday, mayday, cache not fetched, I repeat, cache not fetched all hands, all hands, man your keyboards.")
      debugger
    })

  return response.data.data.attributes
}