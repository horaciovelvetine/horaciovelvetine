export default function searchReducer(search, payload) {
  const query = payload.query

  return search = { query: query }
}
