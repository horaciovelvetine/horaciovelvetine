// React & Lib
import React from 'react'
import { useState } from 'react'

// (&sub) Components
import Logo from './search/Logo'
import MobileContextsSelectorDropdown from './search/MobileContextsSelectorDropdown'
import MobileNavBarToggleDisplayButton from './search/MobileNavBarToggleDisplayButton'
import SearchForm from './search/SearchForm'
import NavLinks from './search/NavLinks'
import MobileNavigationMenu from './search/MobileNavigationMenu'



export default function Search(props) {
  const [search, setSearch] = useState({query: ""})

  return (
    <header className='flex-shrink-0 relative h-16 bg-white flex items-center'>
      <Logo />
      <MobileContextsSelectorDropdown contextsMenuSelections={props.contextsMenuSelection} dispatchContextMenu={props.dispatchContextMenu} />
      <MobileNavBarToggleDisplayButton settings={props.settings} setTheSettings={props.setTheSettings} />

      <div className='hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between'>
        <SearchForm setSearch={setSearch}/>
        <NavLinks navigation={props.navigation} />
      </div>
      <MobileNavigationMenu settings={props.settings} setTheSettings={props.setTheSettings} />
    </header>
  )
}
