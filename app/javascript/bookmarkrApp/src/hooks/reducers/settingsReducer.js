import React from 'react'

export default function settingsReducer(prevState, settingKey) {
  
  //sets up new object for state
  let newStateObject = Object.keys(prevState).map((key, index) => {
    return prevState[key]
  })



  switch (settingKey) {
    case '+Link':
      newStateObject[`${settingKey}`] = !prevState[`${settingKey}`]
      break;
  
    default:
      break;
  }

  return newStateObject
}
