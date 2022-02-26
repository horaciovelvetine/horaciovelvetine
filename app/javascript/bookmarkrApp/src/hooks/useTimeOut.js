import { useCallback, useEffect, useRef } from "react"

// #2: https://github.com/WebDevSimplified/useful-custom-react-hooks/tree/main/src/2-useTimeout
export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback)
  const timeoutRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}