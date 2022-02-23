const axios = require('axios');
// Returns CSRF token mismatch, see issue: #61
function fetchResults() {
  const test = payload 
  const response = await axios.post(`${baseUrl("/search")}`, { test })
    .then(function (response) {
      console.log(response)
      debugger
    }).catch(function (error) {
      console.log(error)
    })
  return response
}