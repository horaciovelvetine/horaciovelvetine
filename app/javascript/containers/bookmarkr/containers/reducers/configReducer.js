import { useState, useReducer, useMemo } from 'react'

export default function configReducer(prevState, action) {
  debugger
}

/*
export default function contextReducer(contexts, event) {
  event.preventDefault();
  debugger
  //catches text of click event on sidebar buttons
  let targetName = event.target.text
  if (targetName == undefined) {
    targetName = event.target.parentNode.text
  }

  return (
    contexts.map((context) => {
      if (context.current) {
        context.current = false
      }
      if (context.name == targetName) {
        context.current = true
      }
    })
  )

} 

*/