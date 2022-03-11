import getSearchResults from '../requests/getSearchResults'
import { useMutation } from 'react-query'

export default function useDelLink() {
  return useMutation(getSearchResults, {
    onSuccess: (res) => {
      return res.data.attributes
    }
  })
}