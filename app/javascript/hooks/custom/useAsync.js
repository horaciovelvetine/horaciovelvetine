import { useCallback, useEffect, useState } from 'react'

export default function useAsync(callback, dependencies = []) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [val, setVal] = useState()

  const callbackMemo = useCallback(() => { 
    setLoading(true)
    setError(null)
    setVal(null)
    callback().then(setVal).catch(setError).finally(()=> setLoading(false))
  }, dependencies)

  useEffect(() => {
    callbackMemo()
  }, [callbackMemo])

  return { loading, error, val }
}