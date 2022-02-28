//React + Lib Imports
import React from 'react'
import { useReducer, useState} from 'react'


// (&sub) Components
import Results from './src/components/Results'
import Search from './src/components/Search'

// Hooks, Utils & Misc
import settingsReducer from './src/hooks/reducers/settingsReducer'
import contextsMenuSelectionReducer from './src/hooks/reducers/contextsMenuSelectionReducer'
import useEffectOnUpdate from './src/hooks/useEffectOnUpdate'

export default function bookmarkrApp(props) {
  const { defaultSettings, contexts, navigation } = { ...props };

  // const { isLoading, error, data } = useQuery('cacheLinksTags', fetchCache);

  const [theSettings, setTheSettings] = useReducer(settingsReducer, defaultSettings)
  const [contextMenuSelections, dispatchContextMenu] = useReducer(contextsMenuSelectionReducer, contexts)
  const [matchIds, setMatchIds] = useState([])

  useEffectOnUpdate(() => {
    console.log("match ids!", matchIds)
    debugger
  }, [matchIds])
  
  return (
    <>
      <div className='h-screen flex flex-col'>
        <Search navigation={navigation} settings={theSettings} setTheSettings={setTheSettings} contextsMenuSelections={contextMenuSelections} dispatchContextMenu={dispatchContextMenu} setMatchIds={setMatchIds} matchIds={matchIds}/>
        <Results navigation={navigation} settings={theSettings} setTheSettings={setTheSettings} contextsMenuSelections={contextMenuSelections} dispatchContextMenu={dispatchContextMenu} matchIds={matchIds}/>
      </div>
    </>
  )
}
