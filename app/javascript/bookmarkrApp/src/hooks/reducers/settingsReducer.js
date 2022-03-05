import React from 'react'

export default function settingsReducer(prevState, settingKey) {
  
  // should now create new !== object to allow modification
  let newStateObject = Object.fromEntries(Object.entries(prevState).map(([k, v]) => [k, v]))



  switch (settingKey) {
    case '+Link':
      newStateObject[`${settingKey}`] = !prevState[`${settingKey}`]
      break;
  
    default:
      break;
  }

  return newStateObject
}
