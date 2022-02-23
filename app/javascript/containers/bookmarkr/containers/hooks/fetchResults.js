import baseUrl from "./helpers/baseUrl"
const axios = require('axios');

export default async function fetchResults(payload) {

  const response = await axios.post(`${baseUrl("/search")}`, { payload })
    .then(function (response) {
      console.log(response)
      debugger
    }).catch(function (error) {
      console.log(error)
    })
  debugger
  return (response)
}