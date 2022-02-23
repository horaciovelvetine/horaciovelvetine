import baseUrl from "./helpers/baseUrl"

export default async function fetchResults(payload) {
  const requestObj = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(payload)
  }

  const request = await fetch(baseUrl("/search"), requestObj).then((res) => res.json())
  console.log(request)
  debugger
  return (request)
}