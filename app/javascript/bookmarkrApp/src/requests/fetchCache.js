import baseUrl from "../../config/baseUrl"
import axios from "axios"


export default function fetchCache() {
    return async () => await axios.get(`${baseUrl()}`)
  }

  // const request = async () => await axios.get(`${baseUrl()}`)
  //   .then((response) => {
  //     queryClient.setQueryData('cacheLinksTags', response.data.data.attributes)
  //     debugger
  //   })
  //   .catch((error) => {
  //     //handles an error
  //     console.log(error, "Mayday, mayday, cache not fetched, I repeat, cache not fetched all hands, all hands, man your keyboards.")
  //   })
  // return request
      // queryClient.setQueryData('cacheLinksTags', previousQueryData => {
      //   return {...previousQueryData, data: [...previousQueryData, response.data]}
      // })