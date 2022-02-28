//React + Lib Imports
import React from 'react'

// (&sub) Components
import Results from './src/components/Results'
import Search from './src/components/Search'

// Hooks, Utils & Misc
import fetchCache from './src/requests/fetchCache'
import settingsReducer from './src/hooks/reducers/settingsReducer'
import contextsMenuSelectionReducer from './src/hooks/reducers/contextsMenuSelectionReducer'


export default function bookmarkrApp(props) {
  const { defaultSettings, contexts, navigation } = { ...props };  

  const { isLoading, error, data } = useQuery('cacheLinksTags', fetchCache);

  const [theSettings, setTheSettings] = useReducer(settingsReducer, defaultSettings)
  const [contextMenuSelections, dispatchContextMenu] = useReducer(contextsMenuSelectionReducer, contexts)
  return (
    <>
      <div className='h-screen flex flex-col'>
        <Search navigation={navigation} settings={theSettings} setTheSettings={setTheSettings} contextsMenuSelections={contextMenuSelections} dispatchContextMenu={dispatchContextMenu} setStoredLinks={setStoredLinks} setStoredTags={setStoredTags} storedLinks={storedLinks} storedTags={storedTags} />
        <Results navigation={navigation} settings={theSettings} setTheSettings={setTheSettings} contextsMenuSelections={contextMenuSelections} dispatchContextMenu={dispatchContextMenu} setStoredLinks={setStoredLinks} setStoredTags={setStoredTags} storedLinks={storedLinks} storedTags={storedTags} />
      </div>
    </>
  )
}
