import React from 'react'
import makeObjectCopy from '../utils/makeObjectCopy'
import {linkKey, groupKey, editKey, editGroupKey, settingsKey} from '../../components/slideOvers/utils/defaultSlideOverVals'


export default function settingsReducer(prevState, settingKey) {

  // create a copy of object to modify and return
  const newStateObject = makeObjectCopy(prevState)
  
  switch (settingKey) {

    case linkKey:
    case groupKey:

      newStateObject['slideOverOpen'] = !prevState['slideOverOpen']
      newStateObject['slideOverActionType'] = settingKey
      break;

    case editKey:
    case editGroupKey:

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
