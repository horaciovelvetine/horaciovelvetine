export default function groupsLinksReducer(prev, links) {
  //=> Using a reducer as opposed to state for future "free solo" use
  debugger
  const linkIds = links.map(l => l.id)
  return linkIds
}