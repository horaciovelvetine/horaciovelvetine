//React + Lib Imports
import React from 'react'
import { useMutation } from 'react-query'
import { useReducer, useState } from 'react'


// (&sub) Components
import Results from './src/components/Results'
import Search from './src/components/Search'

// Hooks, Utils & Misc
import settingsReducer from './src/hooks/reducers/settingsReducer'
import contextsMenuSelectionReducer from './src/hooks/reducers/contextsMenuSelectionReducer'
import useEffectOnUpdate from './src/hooks/useEffectOnUpdate'
import getSearchResults from './src/requests/getSearchResults'

export default function bookmarkrApp(props) {
  // config vars
  const { defaultSettings, contexts, navigation } = { ...props };

  // Search Results Mutation Stuff
  const useGetResultsIds = () => {

    return useMutation(getSearchResults, {
      onSuccess: (res) => {
        console.log(res)
        debugger
        // setResultsIds(resultsIds)
      }
    })
    debugger
  }
  const { mutate: searchResultsMutation, isLoading, isError, isSuccess, data, error } = useGetResultsIds()

  // State Related
  const [settings, setTheSettings] = useReducer(settingsReducer, defaultSettings)
  const [contextsMenuSelections, dispatchContextsMenu] = useReducer(contextsMenuSelectionReducer, contexts)
  const [resultsIds, setResultsIds] = useState(["test"])

  useEffectOnUpdate(() => {
    console.log("match ids!", resultsIds)
    debugger
  }, [resultsIds])

  const childProps = {
    navigation, settings, setTheSettings, dispatchContextsMenu, contextsMenuSelections, dispatchContextsMenu
  }

  return (
    <>
      <div className='h-screen flex flex-col'>
        <Search {...childProps} searchResultsMutation={searchResultsMutation} setResultsIds={setResultsIds} />
        <Results {...childProps} resultsIds={resultsIds} />
      </div>
    </>
  )
}
