import baseUrl from "./helpers/baseUrl"

export default async function fetchResults(payload) {
  const configOBj = {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(payload)
  }

  const postRes = await fetch(baseUrl() + "/search", configOBj).then((res) => res.json())
  debugger
}