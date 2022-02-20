const baseUrl = 'http://127.0.0.1:3000/bookmarkr';


export default function fetchConfigCache() {
  // ASYNC VER: const response = await fetch(baseUrl).then((res) => res.json())
  return fetch(baseUrl).then((res) => res.json())
}