import postLink from '../requests/postLink'
import { useMutation } from 'react-query'

export default function useLinkSave() {
  return useMutation(postLink, {
    onSuccess: (res) => {
      return res
    }
  })
}
