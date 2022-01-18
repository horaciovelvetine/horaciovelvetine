export default function ContextsReducer(contexts, event) {
  event.preventDefault();
  //catches text of click event on sidebar buttons
  let targetName = event.target.text
  if (targetName == undefined) {
    targetName = event.target.parentNode.text
  }


  // sets all contexts.where current == true to false 
  contexts.filter((c) => c.current)[0].current = false
  // sets selected context to current = true 
  contexts.filter((c) => c.name == targetName)[0].current = true

  console.log(contexts, targetName, "Im in contexts reducer")
  debugger
  return contexts 
}