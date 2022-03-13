import { useEffect } from "react";
import useTimeout from './useTimeOut'

// #3: https://github.com/WebDevSimplified/useful-custom-react-hooks/tree/main/src/3-useDebounce
export default function useBounceDelay(callback, duration, dependencies) {
  const { reset, clear } = useTimeout(callback, duration)
  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [])
}