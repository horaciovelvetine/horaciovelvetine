import postLinkGroup from '../requests/postLinkGroup'
import { useMutation } from 'react-query'

export default function useLinkGroupSave() {
  return useMutation(postLinkGroup, {
    onSuccess: (res) => {
      return res
    }
  })
  return
}

