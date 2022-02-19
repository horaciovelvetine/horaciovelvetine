const baseUrl = 'http://127.0.0.1:3000/bookmarkr';


export default async function fetchConfigCache() {
  return fetch(baseUrl).then((res) => res.json()) //await add
  
}
