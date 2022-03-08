import React from 'react'

const linkKey = '+Link'
const groupKey = '+LinkGroup'
const initializer = '_init'


export default function settingsReducer(prevState, settingKey) {
const slideOverKey = () => settingKey == (linkKey || groupKey) ? true : false

  // creates a copy of object to modify
  let newStateObject = Object.fromEntries(Object.entries(prevState).map(([k, v]) => [k, v]))
  switch (settingKey) {
    
    case slideOverKey:
      newStateObject['slideOverOpen'] = !prevState['slideOverOpen']
      newStateObject['slideOverActionType'] = settingKey
      break;
    
    case linkKey + initializer:
      break;
  
    default:
      debugger
      break;
  }
  return newStateObject
}
