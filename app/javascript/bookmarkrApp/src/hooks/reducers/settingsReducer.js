import React from 'react'
import makeObjectCopy from '../utils/makeObjectCopy'

const linkKey = '+Link'
const groupKey = '+LinkGroup'
const settingsKey = ' Settings'
const initializer = '_init'


export default function settingsReducer(prevState, settingKey) {

  // create a copy of object to modify and return
  const newStateObject = makeObjectCopy(prevState)
  
  switch (settingKey) {

    case linkKey:
    case groupKey:

      newStateObject['slideOverOpen'] = !prevState['slideOverOpen']
      newStateObject['slideOverActionType'] = settingKey
      break;

    case settingsKey:
    
      debugger
      break;

    default:
      debugger
      break;
  }
  return newStateObject
}
