import fetchResults from "./fetchResults";


export default function resultsReducer(prev, payload) {
  const respondplz = fetchResults(payload)
  debugger
  
  return ("resultsReducer");
}