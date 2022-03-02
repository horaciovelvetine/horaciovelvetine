export default function getResultsDisplayInfo(ids, cache) {
  if (ids.length <= 0 || ids == undefined) return
  const results = []
  
  for (let index = 0; index < ids.length; index++) {
    const resultLookup = ids[index];
    debugger
    // results.push(cache.find(o => o.id === resultLookup.id))
  }
  debugger
  return results
}