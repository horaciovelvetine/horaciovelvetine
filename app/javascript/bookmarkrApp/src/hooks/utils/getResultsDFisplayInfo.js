export default function getResultsDisplayInfo(ids, cache) {
  if (ids.length <= 0 || ids == undefined) return
  const results = []
  
  for (let index = 0; index < ids.length; index++) {
    const idResult = ids[index];
    debugger
    // results.push(cache.find(o => o.id === id))
  }
  debugger
  return results
}