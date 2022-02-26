import baseUrl from "../../config/baseUrl"

export default function fetchCache() {
  const cache = axios.get(`${baseUrl}`)
    .then((response) => {
      //handle the response => send to local?? 
    })
    .catch((error) => {
      //handles an error
    })
  return cache
}