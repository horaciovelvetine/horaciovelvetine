import { useMutation, useQueryClient } from 'react-query'
import deleteLink from '../requests/deleteLink'

export default function useDelLink() {
  const queryClient = useQueryClient()
  return useMutation(deleteLink, {
    onSuccess: (res) => {
      queryClient.invalidateQueries('cashe')
      return res
    }
  })
}