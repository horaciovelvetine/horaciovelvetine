import { useEffect, useRef } from 'react'


// #4: https://github.com/WebDevSimplified/useful-custom-react-hooks/tree/main/src/4-useUpdateEffect
export default function useEffectOnUpdate(callback, dependencies) {
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    return callback()
  }, dependencies)
}