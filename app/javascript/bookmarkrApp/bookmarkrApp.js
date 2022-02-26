//React + Lib Imports
import React from 'react'
import App from './src/App'

//Import Default Config Information
import { contextMenuSelections, navBarMenuItems, defaultSettings } from './config/defaultStateItems'

export const BookmarkrContext = React.createContext()

export default function bookmarkrApp() {
  const contexts = contextMenuSelections()
  const navigation = navBarMenuItems()
  const settings = defaultSettings()


  return (
    <>
      <App defaultSettings={settings} contexts={contexts} navigation={navigation} />
    </>
  )
}
