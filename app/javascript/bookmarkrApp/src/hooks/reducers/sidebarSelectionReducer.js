import React from 'react'
import makeObjectCopy from '../utils/makeObjectCopy'

export default function sidebarSelectionReducer(prevState, newCurName) {

  //! Issue with unique keys for all of the elements
  const newStateObject = makeObjectCopy(prevState)
  newStateObject.each(sel => sel.current = false) //==> resets currently true to false, now all cur == false
  debugger
  // newStateObject.filter(sel => sel.name = newCurName)[0].current = true //==> sets newCur to true
  

  return newStateObject

}
