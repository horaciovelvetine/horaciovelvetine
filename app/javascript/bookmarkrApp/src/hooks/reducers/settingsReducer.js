import React from 'react'

const linkKey = '+Link'
const initializer = '_init'

export default function settingsReducer(prevState, settingKey) {

  // creates a copy of object to modify
  let newStateObject = Object.fromEntries(Object.entries(prevState).map(([k, v]) => [k, v]))
  switch (settingKey) {
    //toggles bool of setting addLinkMenuOpen
    case linkKey:
      newStateObject['addLinkSlideOverOpen'] = !prevState['addLinkSlideOverOpen']
      break;
    
    case linkKey + initializer:
      break;
  
    default:
      break;
  }
  return newStateObject
}
