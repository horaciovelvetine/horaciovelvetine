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

  //? build mutation here to pass down so that on search we rock a mutation for results

  const [theSettings, setTheSettings] = useReducer(settingsReducer, defaultSettings)
  const [contextMenuSelections, dispatchContextMenu] = useReducer(contextsMenuSelectionReducer, contexts)
  const [matchIds, setMatchIds] = useState([])

  useEffectOnUpdate(() => {
    console.log("match ids!", matchIds)
    debugger
  }, [matchIds])

  const childProps = {
    navigation, theSettings, setTheSettings, dispatchContextMenu, contextMenuSelections, dispatchContextMenu, setMatchIds, matchIds
  }
  
  return (
    <>
      <div className='h-screen flex flex-col'>
        <Search {...childProps}/>
        <Results {...childProps}/>
      </div>
    </>
  )
}
