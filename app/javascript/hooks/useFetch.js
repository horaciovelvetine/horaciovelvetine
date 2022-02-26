import useAsync from './useAsync'

const jsonHeader = {
  headers: { "Content-Type": "application/json", }
}
// #10: https://github.com/WebDevSimplified/useful-custom-react-hooks/tree/main/src/10-useFetch
export default function useFetch(url, options = {}, dependencies = []) {
    
  return useAsync(() => {
    return fetch(url, { ...jsonHeader, ...options }).then(res => {
      const data = res.json()
      debugger
      if (res.ok) return data
      return res.json().then(json => Promise.reject(json))
      
    })
  }, dependencies)
}