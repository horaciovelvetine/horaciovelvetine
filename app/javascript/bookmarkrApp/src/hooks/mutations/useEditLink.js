import updateLink from '../requests/updateLink'
import { useMutation, useQueryClient } from 'react-query'

export default function useEditLink() {
  const queryClient = useQueryClient()
  return useMutation(updateLink, {
    onSuccess: (res) => {
      console.log(res)
      queryClient.invalidateQueries('cashe')
      debugger
      return res
    }
  })
}