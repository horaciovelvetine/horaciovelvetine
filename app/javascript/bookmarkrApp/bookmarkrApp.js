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
        return res
      }
    })
  }

  const { mutate: searchResultsMutation, isIdle, isLoading, isError, isSuccess, data, error } = useGetResults()

  const resultsCheck = (data) => {
    if (isIdle || data == undefined) return false
    if (data) return data.data.attributes
    //uh-oh!
    debugger
  }

  // Define all state related 
  const [settings, setTheSettings] = useReducer(settingsReducer, defaultSettings)
  const [applicationMenuSelections, dispatchApplicationMenu] = useReducer(applicationMenuSelectionReducer, applicationMenu)

  const childProps = {
    navigationMenu, settings, setTheSettings, dispatchApplicationMenu, applicationMenuSelections
  }

  return (
    <>
      <div className='h-screen flex flex-col'>
        <Search {...childProps} searchResultsMutation={searchResultsMutation} />
        <Results {...childProps} resultIds={resultsCheck(data)} />
      </div>
    </>
  )
}
