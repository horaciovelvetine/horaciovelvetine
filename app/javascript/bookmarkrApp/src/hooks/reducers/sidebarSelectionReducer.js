import React from 'react'
import makeObjectCopy from '../utils/makeObjectCopy'

export default function sidebarSelectionReducer(prevState, newCurName) {

  const newStateObject = makeObjectCopy(prevState)
  debugger
  switch (newCurName) {
    case 'Bookmarkr':

      break;

    case 'Portfolio':

      break;

    case 'Ktchn':

      break;

    case 'Settings':

      break;

    default:
      break;
  }

}
