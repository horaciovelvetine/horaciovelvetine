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

export default function bookmarkrApp(props) {
  const { defaultSettings, contexts, navigation } = { ...props };

  //? build mutation here to pass down so that on search we rock a mutation for results
  const getSearchResults = (payload) => {
    return axios.post(baseurl('/search'), payload)
  }
  const useGetResultsIds = () => {
    return useMutation(getSearchResults)
    debugger
  }

  const { mutate: searchResultsMutation, isLoading, isError, error } = useGetResultsIds()
  const [theSettings, setTheSettings] = useReducer(settingsReducer, defaultSettings)
  const [contextMenuSelections, dispatchContextMenu] = useReducer(contextsMenuSelectionReducer, contexts)
  const [resultsIds, setResultsIds] = useState([])

  useEffectOnUpdate(() => {
    console.log("match ids!", resultsIds)
    debugger
  }, [resultsIds])

  const childProps = {
    navigation, theSettings, setTheSettings, dispatchContextMenu, contextMenuSelections, dispatchContextMenu
  }

  return (
    <>
      <div className='h-screen flex flex-col'>
        <Search {...childProps} searchResultsMutation={searchResultsMutation} />
        <Results {...childProps} resultsIds={resultsIds} />
      </div>
    </>
  )
}
