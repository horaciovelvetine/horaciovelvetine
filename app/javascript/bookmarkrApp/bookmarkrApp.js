//React + Lib Imports
import React from 'react'

//Import Default Config Information
import { contextMenuSelections, navBarMenuItems, defaultSettings} from './config/defaultStateItems'

const BookmarkrContext = React.createContext({ contextMenuSelections: contextMenuSelections, navBarMenuItems: navBarMenuItems, defaultSettings: defaultSettings})

export default function bookmarkrApp() {


  return (
    <>
      <BookmarkrContext.Provider value={{ contextMenuSelections: contextMenuSelections, navBarMenuItems: navBarMenuItems, defaultSettings: defaultSettings }} >
        <StateProvider />
      </BookmarkrContext.Provider>
    </>
  )
}
