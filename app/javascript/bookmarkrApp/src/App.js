// React & Libs
import React from 'react'
import { useQuery } from 'react-query'

// (&sub) Comoponents
import Results from './components/Results'
import Search from './components/Search'

// Hooks and Defaults
import fetchCache from '../config/fetchCache'

export default function App(props) {
  const { isLoading, error, data } = useQuery('getCache', fetchCache)
  const { defaultSettings, contexts, navigation } = { ...props }

  
  debugger
  return (
    <div className='h-screen flex flex-col'>
      <Search defaultSettings={defaultSettings} contexts={contexts} navigation={navigation} />
      <Results contexts={contexts} navigation={navigation} />
    </div>
  )
}


/* 
  // const SearchMutation = useMutation(queryPayload => {
  //   // const results = axios.post(`${baseUrl("/search")}`, queryPayload)
  //   //   .then((response) => {
  //   //   //handles response info
  //   //   }).catch((error) => {
  //   //     console.log(error)
  //   //   })
  //   // return
  // })

  // const [settings, dispatchSettings] = useReducer( settingsReducer, {})
*/