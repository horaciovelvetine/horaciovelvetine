export default function baseUrl(routing) {
  const baseUrl = "http://127.0.0.1:3000"
  if (routing == undefined || null) return baseUrl
  return (baseUrl + routing)
  
} 