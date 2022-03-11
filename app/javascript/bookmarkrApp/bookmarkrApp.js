//* React + Lib Imports
import React from 'react'
import { QueryClient, useQuery, QueryClientProvider } from 'react-query'
import { useReducer } from 'react'

//* (&sub) Components
import MainContents from './src/components/MainContents'
import Search from './src/components/Search'
import SlideOvers from './src/components/SlideOvers'

//* Hooks
import settingsReducer from './src/hooks/reducers/settingsReducer'
import sidebarSelectionReducer from './src/hooks/reducers/sidebarSelectionReducer'

//* Requests 
import fetchCache from './src/hooks/requests/fetchCache'

//* Mutations
import useGetResults from './src/hooks/mutations/useGetResults'
import useLinkSave from './src/hooks/mutations/useLinkSave'
import useLinkGroupSave from './src/hooks/mutations/useLinkGroupSave'

//* Util 
import getResultsInfo from './src/hooks/utils/getResultsInfo'

const queryClient = new QueryClient()

//! APPLICATION START !//
export default function bookmarkrApp(props) {
  //* config  vars & state 
  const { defaultSettings, applicationMenu, navigationMenu } = { ...props };
  const { isLoading: cacheLoading, data: cacheData } = useQuery('cashe', fetchCache);

  //* config all state related
  const [settings, setTheSettings] = useReducer(settingsReducer, defaultSettings)
  const [sidebarSelections, dispatchSidebarSelection] = useReducer(sidebarSelectionReducer, applicationMenu)

  //* Mutations and Actions
  const { mutate: searchMutation, isIdle: resultsIdle, isLoading: resultsLoading, data: resultsData, } = useGetResults()
  const { mutate: linkSaveMutation, isIdle: linkSaveIdle, isSuccess: linkSaveSuccess, data: linkSaveData } = useLinkSave()
  const { mutate: linkGroupMutation, isIdle: linkGroupIdle, isSuccess: linkGroupSaveSuccess, data: linkGroupData } = useLinkGroupSave()

  //* Setup Props Objects
  const childProps = {
    navigationMenu, settings, setTheSettings, dispatchSidebarSelection, sidebarSelections
  }
  const slideOverMutationProps = {
    linkSaveMutation, linkGroupMutation, linkSaveIdle, linkGroupIdle, linkSaveSuccess, linkGroupSaveSuccess, linkSaveData, linkGroupData
  }

  function resultsIdPropFix() {
    if (resultsIdle || resultsLoading) return false
    return getResultsInfo(resultsData.data.attributes.results, cacheData)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className='h-screen flex flex-col'>
        <Search {...childProps} searchResultsMutation={searchMutation} />
        <MainContents {...childProps} results={resultsIdPropFix()} cacheData={cacheLoading ? false : cacheData} />
        <SlideOvers settings={settings} setTheSettings={setTheSettings} {...slideOverMutationProps} cacheData={cacheLoading ? false : cacheData} />
      </div>
    </QueryClientProvider>
  )
}
