//* React + Lib Imports
import React from 'react'
import { QueryClient, useQuery, QueryClientProvider } from 'react-query'
import { useReducer } from 'react'

//* (&sub) Components
import Results from './src/components/Results'
import Search from './src/components/Search'
import SlideOvers from './src/components/SlideOvers'

//* Hooks
import settingsReducer from './src/hooks/reducers/settingsReducer'
import applicationMenuSelectionReducer from './src/hooks/reducers/applicationMenuSelectionReducer'

//* Requests 
import fetchCache from './src/hooks/requests/fetchCache'
import handleResultsMutation from './src/hooks/utils/handleResultsMutation'

//* Mutations
import useGetResults from './src/hooks/mutations/useGetResults'
import useLinkSave from './src/hooks/mutations/useLinkSave'
import useLinkGroupSave from './src/hooks/mutations/useLinkGroupSave'

const queryClient = new QueryClient()
//! APPLICATION START !//
export default function bookmarkrApp(props) {
  //* config  vars & state 
  const { defaultSettings, applicationMenu, navigationMenu } = { ...props };
  const { isLoading: cacheLoading, data: cacheData } = useQuery('cashe', fetchCache);

  //* config all state related
  const [settings, setTheSettings] = useReducer(settingsReducer, defaultSettings)
  const [applicationMenuSelections, dispatchApplicationMenu] = useReducer(applicationMenuSelectionReducer, applicationMenu)

  //* Mutations and Actions
  const { mutate: searchMutation, isIdle: resultsIdle, isLoading: resultsLoading, data: resultsData, } = useGetResults()
  const { mutate: linkSaveMutation, isIdle: linkSaveIdle, isSuccess: linkSaveSuccess, data: linkSaveData } = useLinkSave()
  const { mutate: linkGroupMutation, isIdle: linkGroupIdle, isSuccess: linkGroupSaveSuccess, data: linkGroupData } = useLinkGroupSave()

  //* Setup Props Objects
  const childProps = {
    navigationMenu, settings, setTheSettings, dispatchApplicationMenu, applicationMenuSelections
  }
  const slideOverMutationProps = {
    linkSaveMutation, linkGroupMutation, linkSaveIdle, linkGroupIdle, linkSaveSuccess, linkGroupSaveSuccess, linkSaveData, linkGroupData
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className='h-screen flex flex-col'>
        <Search {...childProps} searchResultsMutation={searchMutation} />
        <Results {...childProps} resultIds={handleResultsMutation(resultsData, resultsIdle, resultsLoading)} cacheData={cacheLoading ? false : cacheData} />
        <SlideOvers settings={settings} setTheSettings={setTheSettings} {...slideOverMutationProps} cacheData={cacheLoading ? false : cacheData} />
      </div>
    </QueryClientProvider>
  )
}
