import getSearchResults from '../../requests/getSearchResults'

export default function useGetResults() {
  return useMutation(getSearchResults, {
    onSuccess: (res) => {
      return res
    }
  })
}