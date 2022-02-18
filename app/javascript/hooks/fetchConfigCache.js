const baseUrl = 'http://127.0.0.1:3000/bookmarkr';

// Basic fetch no async, working for index bookmarkr grab
export default function fetchConfigCache() {
  return fetch(baseUrl).then((res) => res.json())
}
