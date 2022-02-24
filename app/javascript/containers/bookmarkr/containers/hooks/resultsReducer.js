import fetchResults from "./fetchResults";

export default async function resultsReducer(prev, payload) {
  const results = await fetchResults(payload)
  const resultIds = results.data.data[0].attributes.resultIds
  const search = payload

  return (resultIds, search);
}