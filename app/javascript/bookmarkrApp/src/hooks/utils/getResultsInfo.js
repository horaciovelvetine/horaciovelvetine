export default function getResultsInfo(resultsIds, cache) {

  if (!resultsIds) return false

  const { tags, links } = { ...cache }
  const resultObjects = []

  for (let index = 0; index < resultsIds.length; index++) {
    const element = resultsIds[index];
    const match = links.find(link => link.id == element.id)
    match.tags = element.tagsIds.map((obj) => tags.find(tag => tag.id == obj))
    resultObjects.push(match)
  }

  return resultObjects
}