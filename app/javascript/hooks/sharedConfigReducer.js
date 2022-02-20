import {useState, useReducer, useMemo} from 'react'

export default function sharedConfigReducer(props) {
  const [settings, dispatchSettings] = useReducer(props.data.attributes.settings.config.stateful, settingsReducer )
  const [configInfo, setConfigInfo] = useMemo(()=> props.data.attrbutes.settings.config.static)
  debugger
  return ({})
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