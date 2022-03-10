export default function getResultsInfo(resultIds, cache) {
  if (!resultIds) return resultIds

  const { tags, links } = { ...cache.data.data.attributes }
  const resultObjects = []

  for (let index = 0; index < resultIds.length; index++) {
    const element = resultIds[index];
    const match = links.find(link => link.id == element.id)
    match.tags = element.tagsIds.map((obj) => tags.find(tag => tag.id == obj))
    resultObjects.push(match)
  }
  return resultObjects
}