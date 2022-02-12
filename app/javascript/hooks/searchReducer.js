
// Updates the complex state of query to return the correct contex 
export default function searchReducer(search, payload) {
  const contexts = [payload[2].map((c) => c.name)]
  const query = payload[0]
  const context = payload[1][0]
  
  console.log(query, context)
  return search = { query: query, context: context }

}

