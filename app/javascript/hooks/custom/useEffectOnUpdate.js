import { useEffect, useRef } from 'react'

export default function useEffectOnUpdate(callback, dependencies) {
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firsRender.current = false
      return
    }
    return callback()
  }, depencies)
}