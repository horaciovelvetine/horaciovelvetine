import fetchResults from "./fetchResults";


export default function resultsReducer(prev, payload) {
  const results = fetchResults(payload)
  debugger
  
  return ("resultsReducer");
}