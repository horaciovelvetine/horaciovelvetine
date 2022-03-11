import React from 'react'
import makeObjectCopy from '../utils/makeObjectCopy'

export default function sidebarSelectionReducer(prevState, newCurName) {

  const newStateObject = makeObjectCopy(prevState)

  newStateObject.forEach((obj) => {
    obj.current = false
  })

  const setCurrent = () => newStateObject.map(obj => {
    if (obj.name != newCurName) {
      return obj
    }
    obj.current = true
    return obj
  })

  return setCurrent()

}
