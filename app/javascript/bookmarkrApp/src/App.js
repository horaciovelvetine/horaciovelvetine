// React & Libs
import React from 'react'
import { useQuery,  useReducer } from 'react-query'

// (&sub) Comoponents
import Results from './components/Results'
import Search from './components/Search'

// Hooks and Defaults
import fetchCache from '../config/fetchCache'
import settingsReducer from './hooks/reducers/settingsReducer'

export default function App(props) {
  const { isLoading, error, data } = useQuery('getCache', fetchCache)
  const { defaultSettings, contexts, navigation } = { ...props }

  const [settings, dispatchSettings] = useReducer(settingsReducer, defaultSettings)

  debugger

  return (
    <div className='h-screen flex flex-col'>
      <Search contexts={contexts} navigation={navigation} settings={settings} dispatchSettings={dispatchSettings}/>
      <Results contexts={contexts} navigation={navigation} settings={settings} dispatchSettings={dispatchSettings}/>
    </div>
  )
}


