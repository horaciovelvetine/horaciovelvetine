export default function getResultsInfo(props, cache) {
  if (!props.resultsIds) return false

  const { tags, links } = { ...cache }
  const resultObjects = []

  for (let index = 0; index < resultIds.length; index++) {
    const element = resultIds[index];
    const match = links.find(link => link.id == element.id)
    match.tags = element.tagsIds.map((obj) => tags.find(tag => tag.id == obj))
    resultObjects.push(match)
  }
  return resultObjects
}