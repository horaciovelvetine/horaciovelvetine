import { useEffect } from "react";  
import useTimeout from './useTimeOut'

export default function useBounceDelay(callback, duration, dependencies) {
  const { reset, clear } = useTimeout(callback, duration)
  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [])
}