//React + Lib Imports
import React from 'react'
import { useQuery, useMutation } from 'react-query'
import { useReducer } from 'react'

// (&sub) Components
import Results from './src/components/Results'
import Search from './src/components/Search'
import LinkUtil from './src/components/LinkUtil'
import LinkGroupUtil from './src/components/LinkGroupUtil'

// Hooks
import settingsReducer from './src/hooks/reducers/settingsReducer'
import applicationMenuSelectionReducer from './src/hooks/reducers/applicationMenuSelectionReducer'

// Request & Mutation Utils
import fetchCache from './src/hooks/requests/fetchCache'
import useGetResults from './src/hooks/mutations/useGetResults'
import useLinkSave from './src/hooks/mutations/useLinkSave'
import checkMutationData from './src/hooks/utils/checkMutationData'

export default function bookmarkrApp(props) {
  // config  vars & state 
  const { defaultSettings, applicationMenu, navigationMenu } = { ...props };
  const { isLoading: cacheLoading, data: cacheData } = useQuery('cashe', fetchCache);
  // config all state related
  const [settings, setTheSettings] = useReducer(settingsReducer, defaultSettings)
  const [applicationMenuSelections, dispatchApplicationMenu] = useReducer(applicationMenuSelectionReducer, applicationMenu)

  // Mutations and Actions
  const { mutate: searchResultsMutation, isIdle: resultsIdle, isLoading: resultsLoading, data: resultsData, } = useGetResults()
  //* can these be refactored into a singlular "use save?"
  const { mutate: linkUtilSaveMutation, isIdle: linkSaveIdle, isLoading: linkSaveLoading, data: linkSaveData } = useLinkSave()
  const {mutate: linkGroupSaveMutation, isIdle: lingGroupIdle, isLoading, linkGrouLoading, data: linkGroupData} = useLinkGroupSave()
  


  // combine all shared props //=> candidates for removal to a "BookmarkrContext"
  const childProps = {
    navigationMenu, settings, setTheSettings, dispatchApplicationMenu, applicationMenuSelections
  }


  return (
    <>
      <div className='h-screen flex flex-col'>
        <Search {...childProps} searchResultsMutation={searchResultsMutation} />
        <Results {...childProps} resultIds={checkMutationData(resultsData, resultsIdle, resultsLoading)} cacheData={cacheLoading ? false : cacheData} />
        <LinkUtil {...childProps} linkUtilSaveMutation={linkUtilSaveMutation} cacheData={cacheLoading ? false : cacheData} />
        <LinkGroupUtil {...childProps} linkGroupSaveMutation={linkGroupSaveMutation} cacheData={cacheLoading ? false : cacheData} />
      </div>
    </>
  )
}
