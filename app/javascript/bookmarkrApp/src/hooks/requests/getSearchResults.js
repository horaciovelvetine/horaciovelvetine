import baseUrl from '../../../config/baseUrl'
import axios from "axios"

export default async function getSearchResults(payload) {

  //==> sends query, returns reult Ids to match agains 'cashe'
  const response = await axios.post(baseUrl('/bookmarkr/search'), payload)

    .then((res) => {
      return res
    })

    .catch((err) => {
      console.log(err)
      debugger
    })

  return response.data
}
