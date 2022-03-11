//* React + Lib Imports
import React from 'react'
import { QueryClient, useQuery, QueryClientProvider } from 'react-query'
import { useReducer, useState } from 'react'

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
import useDelLink from './src/hooks/mutations/useDelLink'
import useEditLink from './src/hooks/mutations/useEditLink'
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
  const [ soFill, setSoFill ] = useState(false)

  //* Mutations and Actions
  const { mutate: searchMutation, isIdle: resultsIdle, isLoading: resultsLoading, data: resultsData, } = useGetResults()
  const { mutate: linkSaveMutation, isLidle: linkSaveIdle } = useLinkSave()
  const { mutate: linkDelMutation } = useDelLink()
  const { mutate: linkEditMutation, isIdle: editIdle, data: editData } = useEditLink()
  const { mutate: linkGroupMutation, isIdle: linkGroupIdle } = useLinkGroupSave()

  //* Setup Props Objects
  const childProps = {
    navigationMenu, settings, setTheSettings, dispatchSidebarSelection, sidebarSelections, setSoFill
  }
  const slideOverMutationProps = {
  linkSaveMutation, linkGroupMutation, linkGroupIdle, linkSaveIdle, linkEditMutation
  }

  function resultsIdPropFix() {
    if (resultsIdle || resultsLoading) return false
    return getResultsInfo(resultsData.data.attributes.results, cacheData)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className='h-screen flex flex-col'>
        <Search {...childProps} searchResultsMutation={searchMutation} />
        <MainContents {...childProps} results={resultsIdPropFix()} cacheData={cacheLoading ? false : cacheData} linkDelMutation={linkDelMutation} />
        <SlideOvers settings={settings} setTheSettings={setTheSettings} {...slideOverMutationProps} cacheData={cacheLoading ? false : cacheData} fillInfo={soFill} />
      </div>
    </QueryClientProvider>
  )
}
