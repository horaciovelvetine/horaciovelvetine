import useAsync from './useAsync'

const DEF_HEADERS = {
  headers: { "Content-Type": "application/json",}
}
// #10: https://github.com/WebDevSimplified/useful-custom-react-hooks/tree/main/src/10-useFetch
export default function useFetch(url, options = {}, depends = []) {
  return useAsync(() => {
    return fetch(url, { ...DEF_HEADERAS, ...options }).then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
  }, dependencies)
}