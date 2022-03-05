import getSearchResults from '../requests/getSearchResults'
import { useMutation } from 'react-query'

export default function useGetResults() {
  return useMutation(getSearchResults, {
    onSuccess: (res) => {
      return res
    }
  })
}