//React + Lib Imports
import React from 'react'
import { useMutation } from 'react-query'
import { useReducer } from 'react'

// (&sub) Components
import Results from './src/components/Results'
import Search from './src/components/Search'

// Hooks, Utils & Misc
import settingsReducer from './src/hooks/reducers/settingsReducer'
import applicationMenuSelectionReducer from './src/hooks/reducers/applicationMenuSelectionReducer'
import useGetResults from './src/hooks/mutations/useGetResults'
import checkResultsMutationData from './src/hooks/utils/checkResultsMutationData'

export default function bookmarkrApp(props) {
  // config vars
  const { defaultSettings, applicationMenu, navigationMenu } = { ...props };

  const { mutate: searchResultsMutation, isIdle, isLoading, isError, isSuccess, data, error } = useGetResults()

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
        <Results {...childProps} resultIds={checkResultsMutationData(data, isIdle, isLoading)} />
      </div>
    </>
  )
}
