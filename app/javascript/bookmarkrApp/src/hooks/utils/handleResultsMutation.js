export default function handleResultsMutation(data, isIdle, isLoading) {
  if (isIdle || isLoading) return false
  if (data) return data.data.attributes

  debugger
}