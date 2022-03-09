import React from 'react'

const linkKey = '+Link'
const groupKey = '+LinkGroup'
const initializer = '_init'


export default function settingsReducer(prevState, settingKey) {
const slideOverKey = (key) => key == (linkKey || groupKey) ? true : false

  // creates a copy of object to modify
  let newStateObject = Object.fromEntries(Object.entries(prevState).map(([k, v]) => [k, v]))
  switch (settingKey) {
    
    case linkKey:
    case groupKey:
      
      newStateObject['slideOverOpen'] = !prevState['slideOverOpen']
      newStateObject['slideOverActionType'] = settingKey
      break;
    
    case linkKey + initializer:
    case groupKey + initializer:
      debugger
      break;
  
    default:
      debugger
      break;
  }
  debugger
  return newStateObject
}
