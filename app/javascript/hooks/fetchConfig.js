const baseUrl = 'http://127.0.0.1:3000/bookmarkr';


export default async function fetchConfigCache(dispatch) {
  const dis = dispatch
  const response = await fetch(baseUrl).then((res) => res.json()) //await add

  debugger

  dis(response.data.attributes)
  return response
}