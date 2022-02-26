//React + Lib Imports
import React from 'react'
import App from './src/App'

//Import Default Config Information
import { contextMenuSelections, navBarMenuItems, defaultSettings} from './config/defaultStateItems'

const BookmarkrContext = React.createContext({ contextMenuSelections: contextMenuSelections, navBarMenuItems: navBarMenuItems, defaultSettings: defaultSettings})

export default function bookmarkrApp() {
  debugger

  return (
    <>
      <BookmarkrContext.Provider value={{ contextMenuSelections: contextMenuSelections, navBarMenuItems: navBarMenuItems, defaultSettings: defaultSettings }} >
        <App/>
      </BookmarkrContext.Provider>
    </>
  )
}
