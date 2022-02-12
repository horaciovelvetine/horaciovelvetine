
// Updates the complex state of query to return the correct contex 
export default function searchReducer(search, payload) {
  const query = payload[0]
  const context = payload[1].context
  const results = ['Define tihs!']
  console.log('Search Reducer:', query)
  
  return search = { query: query, context: context, results: results }

}
