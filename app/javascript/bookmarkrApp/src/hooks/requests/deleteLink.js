import baseUrl from "../../../config/baseUrl";
import axios from "axios";

export default async function deleteLink(payload) {

  //==> Submit Link ID to destory record
  const response = await axios.delete(baseUrl('/bookmarkr/link'), { data: payload })
  
    .then((res) => {
      debugger
      return res
    })
  
    .catch((err) => {
      console.log(err)
      debugger
    })
  return res
}

