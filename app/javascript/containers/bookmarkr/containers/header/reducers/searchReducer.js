export default function searchReducer(search, payload) {
  const query = payload.query
  const context = payload.context

  return search = { query: query, context: context}
}
