// React & Libs
import React from 'react'
import { useReducer } from 'react'
import { useQuery } from 'react-query'

// (&sub) Comoponents
import Results from './components/Results'
import Search from './components/Search';

// Hooks and Defaults
import fetchCache from './requests/fetchCache';
import settingsReducer from './hooks/reducers/settingsReducer'
import contextsMenuSelectionReducer from './hooks/reducers/contextsMenuSelectionReducer'
import useSessionStorage from './hooks/useSessionStorage'
import useEffectOnUpdate from './hooks/useEffectOnUpdate'

export default function App(props) {
  const { isLoading, error, data } = useQuery('getCache', fetchCache);
  const { defaultSettings, contexts, navigation } = { ...props };

  const [theSettings, setTheSettings] = useReducer(settingsReducer, defaultSettings)
  const [contextMenuSelections, dispatchContextMenu] = useReducer(contextsMenuSelectionReducer, contexts)
  const [sessionCache, setSessionCache, removeFromSessionCache] = useSessionStorage()

  return (
    <div className='h-screen flex flex-col'>
      <Search navigation={navigation} settings={theSettings} setTheSettings={setTheSettings} contextsMenuSelections={contextMenuSelections} dispatchContextMenu={dispatchContextMenu} />
      <Results navigation={navigation} settings={theSettings} setTheSettings={setTheSettings} contextsMenuSelections={contextMenuSelections} dispatchContextMenu={dispatchContextMenu} />
    </div>
  );
}


