import fetchResults from "./fetchResults";


export default async function resultsReducer(prev, payload) {
  const results = await fetchResults(payload)
  debugger
  
  return ("resultsReducer");
}