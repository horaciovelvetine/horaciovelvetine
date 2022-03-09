//* React + Lib Imports
import { useMutation, useQueryClient } from 'react-query'

import postLink from '../requests/postLink'

export default function useLinkSave() {
  const queryClient = useQueryClient()
  return useMutation(postLink, {
    onSuccess: res => {
      queryClient.invalidateQueries('cashe')
      return res
    }
  })
}
