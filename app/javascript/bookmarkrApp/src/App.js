// React & Libs
import React from 'react'
import { useQuery } from 'react-query'

// (&sub) Comoponents
import Results from './components/Results'
import Search from './components/Search'


function fetchCache() {
  const cache = axios.get(`${baseUrl}`)
    .then((response) => {
      //handle the response => send to local?? 
    })
    .catch((error) => {
      //handles an error
    })
  return cache
}

export default function App(props) {
  const { isLoading, error, data } = useQuery('getCache', fetchCache)
  // const SearchMutation = useMutation(queryPayload => {
  //   // const results = axios.post(`${baseUrl("/search")}`, queryPayload)
  //   //   .then((response) => {
  //   //   //handles response info
  //   //   }).catch((error) => {
  //   //     console.log(error)
  //   //   })
  //   // return
  // })

  //! props.setting is an assumption that the context supplied worked!!! 
  // const [settings, dispatchSettings] = useReducer( settingsReducer, props.settings)

  return (
    <div className='h-screen flex flex-col'>
      {/* //! Logo area */}
      <Search />
      <Results />
    </div>
  )
}


/* 
- Request Made
- First up bookmarkr JS...
- Init index request with application (No Async)
  - 
- While awaiting promise main DOM containers Render page Elements
  - Search
    - Contains All Menu Components (including mobile variants):
      - Context Selector Dropdown (mobile)
      - Mobile Navbar (mobile)
      - Search Form 
      - Navbar Links 
      - Clock 
  - Results
    Contains the actual results & Tag cloud TBD



*/