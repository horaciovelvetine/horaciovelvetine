export default function addTagsReducer(prev, tags) {
  //=> Using a reducer as opposed to state for future "free solo" use
  return tags.map(t => t)
}