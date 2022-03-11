import baseUrl from "../../../config/baseUrl";
import axios from "axios";

export default async function deleteLink(payload) {

  //==> Submit Link ID to destory record
  const response = await axios.delete(baseUrl(`/bookmarkr/link/${payload.id}`), { data: payload })

    .then((res) => {
      return res
    })

    .catch((err) => {
      console.log(err)
      debugger
    })

  return response
}

