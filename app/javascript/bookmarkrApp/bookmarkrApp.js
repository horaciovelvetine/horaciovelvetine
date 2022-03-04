//React + Lib Imports
import React from 'react'
import { useMutation } from 'react-query'
import { useReducer, useState } from 'react'

// (&sub) Components
import Results from './src/components/Results'
import Search from './src/components/Search'

// Hooks, Utils & Misc
import settingsReducer from './src/hooks/reducers/settingsReducer'
import applicationMenuSelectionReducer from './src/hooks/reducers/applicationMenuSelectionReducer'
import getSearchResults from './src/requests/getSearchResults'

export default function bookmarkrApp(props) {
  // config vars
  const { defaultSettings, applicationMenu, navigationMenu } = { ...props };

  // Search Results Mutation Stuff
  const useGetResults = () => {
    return useMutation(getSearchResults, {
      onSuccess: (res) => {
        setResults(res.data.data.attributes.results)
      }
    })
  }
  const { mutate: searchResultsMutation, isLoading, isError, isSuccess, data, error } = useGetResults()


  // State Related
  const [settings, setTheSettings] = useReducer(settingsReducer, defaultSettings)
  const [applicationMenuSelections, dispatchApplicationMenu] = useReducer(applicationMenuSelectionReducer, applicationMenu)
  const [results, setResults] = useState([])


  const childProps = {
    navigationMenu, settings, setTheSettings, dispatchApplicationMenu, applicationMenuSelections
  }

  return (
    <>
      <div className='h-screen flex flex-col'>
        <Search {...childProps} searchResultsMutation={searchResultsMutation} setResults={setResults} />
        <Results {...childProps} results={results} />
      </div>
    </>
  )
}
