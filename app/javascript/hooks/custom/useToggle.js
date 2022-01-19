import { useState } from 'react'

export default function useToggle(defaultValue) {
  const [val, setVal] = useState(defaultValue)

  function toggleVal(val) {
    setVal(currentValue => typeof val === "boolean" ? val : !currentValue)
  }

  return [value, toggleVal]
}