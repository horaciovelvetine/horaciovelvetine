export default function addTagsReducer(prev, tags) {
  //=> Using a reducer as opposed to state for future "free solo" use
  const tagIds = tags.map(t => t.id)
  return tagIds
}