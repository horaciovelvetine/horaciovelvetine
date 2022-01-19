import { useState } from 'react'

// #1: https://github.com/WebDevSimplified/useful-custom-react-hooks/tree/main/src/1-useToggle
export default function useToggle(defaultValue) {
  const [val, setVal] = useState(defaultValue)

  function toggleVal(val) {
    setVal(currentValue => typeof val === "boolean" ? val : !currentValue)
  }

  return [value, toggleVal]
}