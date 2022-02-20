import { useState, useReducer, useMemo } from 'react'

import settingsReducer from './settingsReducer'

export default function sharedConfigReducer(response) {
  debugger
  // const [settings, dispatchSettings] = useReducer(settingsReducer, props.data.attributes.settings.config.stateful)
  // const configInfo = props.data.attrbutes.settings.config.static
  // return (settings, configInfo)
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