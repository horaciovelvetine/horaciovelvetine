//React + Lib Imports
import React from 'react'
import { useQuery, useMutation } from 'react-query'
import { useReducer } from 'react'

// (&sub) Components
import Results from './src/components/Results'
import Search from './src/components/Search'

// Hooks, Utils & Misc
import settingsReducer from './src/hooks/reducers/settingsReducer'
import applicationMenuSelectionReducer from './src/hooks/reducers/applicationMenuSelectionReducer'
import useGetResults from './src/hooks/mutations/useGetResults'
import useLinkSave from './src/hooks/mutations/useLinkSave'
import checkMutationData from './src/hooks/utils/checkMutationData'
import AddLink from './src/components/AddLink'
import fetchCache from './src/hooks/requests/fetchCache'

export default function bookmarkrApp(props) {
  // config vars && cache info
  const { defaultSettings, applicationMenu, navigationMenu } = { ...props };
  const { isLoading: cacheLoading, data: cacheData } = useQuery('cashe', fetchCache);

  // Mutations and Actions
  const { mutate: searchResultsMutation, isIdle: resultsIdle, isLoading: resultsLoading, data: resultsData, error: resultsError } = useGetResults()
  const { mutate: linkSaveMutation, isIdle: linkSaveIdle, isLoading: linkSaveLoading, data: linkSaveData, error: linkSaveError } = useLinkSave()

  // config all state related 
  const [settings, setTheSettings] = useReducer(settingsReducer, defaultSettings)
  const [applicationMenuSelections, dispatchApplicationMenu] = useReducer(applicationMenuSelectionReducer, applicationMenu)


  // combine all shared props //=> candidates for removal to a "BookmarkrContext"
  const childProps = {
    navigationMenu, settings, setTheSettings, dispatchApplicationMenu, applicationMenuSelections
  }


  return (
    <>
      <div className='h-screen flex flex-col'>
        <Search {...childProps} searchResultsMutation={searchResultsMutation} />
        <Results {...childProps} resultIds={checkMutationData(resultsData, resultsIdle, resultsLoading)} cacheData={cacheLoading ? false : cacheData} />
        <AddLink {...childProps} linkSaveMutation={linkSaveMutation} cacheData={cacheLoading ? false : cacheData} />
      </div>
    </>
  )
}
