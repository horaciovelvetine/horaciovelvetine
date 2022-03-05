export default function getResultsObjectInfo(resultIds, cache) {
  const { tags, links } = {... cache.data.data.attributes}
  if (!resultIds ) return resultIds
  
  const resultObjects = []  

  for (let index = 0; index < resultIds.length; index++) {
    const element = resultIds[index];
    const match = links.find(link => link.id == element.id)
    debugger
  }

  return resultObjects
}