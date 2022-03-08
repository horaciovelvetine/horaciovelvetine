//* React + Lib Imports
import React from 'react'
import { useQuery } from 'react-query'
import { useReducer } from 'react'

//* (&sub) Components
import Results from './src/components/Results'
import Search from './src/components/Search'
import SlideOvers from './src/components/SlideOvers'

//* Hooks
import settingsReducer from './src/hooks/reducers/settingsReducer'
import applicationMenuSelectionReducer from './src/hooks/reducers/applicationMenuSelectionReducer'

//* Request & Mutation Utils
import fetchCache from './src/hooks/requests/fetchCache'
import useGetResults from './src/hooks/mutations/useGetResults'
import useLinkSave from './src/hooks/mutations/useLinkSave'
import checkMutationData from './src/hooks/utils/checkMutationData' //==> gets nested

//! APPLICATION START !//
export default function bookmarkrApp(props) {
  //* config  vars & state 
  const { defaultSettings, applicationMenu, navigationMenu } = { ...props };
  const { isLoading: cacheLoading, data: cacheData } = useQuery('cashe', fetchCache);
  
  //* config all state related
  const [settings, setTheSettings] = useReducer(settingsReducer, defaultSettings)
  const [applicationMenuSelections, dispatchApplicationMenu] = useReducer(applicationMenuSelectionReducer, applicationMenu)

  //* Mutations and Actions
  const { mutate: searchResultsMutation, isIdle: resultsIdle, isLoading: resultsLoading, data: resultsData, } = useGetResults()
  const { mutate: linkUtilSaveMutation, isIdle: linkSaveIdle, isSuccess: linkSaveSuccess, data: linkSaveData } = useLinkSave()
  const { mutate: linkGroupSaveMutation, isIdle: linkGroupIdle, isSuccess: linkGroupSaveSuccess, data: linkGroupData } = useLinkGroupSave()

  //* Setup Props Objects
  const childProps = {
    navigationMenu, settings, setTheSettings, dispatchApplicationMenu, applicationMenuSelections
  }
  const slideOverMutationProps = {
    linkUtilSaveMutation, linkGroupSaveMutation, linkSaveIdle, linkGroupIdle, linkSaveSuccess, linkGroupSaveSuccess,
  }

  return (
    <>
      <div className='h-screen flex flex-col'>
        <Search {...childProps} searchResultsMutation={searchResultsMutation} />
        <Results {...childProps} resultIds={checkMutationData(resultsData, resultsIdle, resultsLoading)} cacheData={cacheLoading ? false : cacheData} />
        <SlideOvers {...childProps} {...slideOverMutationProps} cacheData={cacheLoading ? false : cacheData} />
      </div>
    </>
  )
}
