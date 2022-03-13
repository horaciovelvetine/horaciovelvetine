//* React & Lib
import React from 'react'
import { useState } from 'react'

//* (&sub) Components
import Logo from './search/Logo'
import SearchForm from './search/SearchForm'
import NavLinks from './search/NavLinks'

//* Hooks, Utils & Misc
import useEffectOnUpdate from '../hooks/useEffectOnUpdate'

//* disabled for var issue
import MobileApplicationSelectorDropdown from './search/MobileAppplicationSelectorDropdown'
import MobileNavBarToggleDisplayButton from './search/MobileNavBarToggleDisplayButton'
import MobileNavigationMenu from './search/MobileNavigationMenu'

//!
export default function Search(props) {
  
  // config vars and state
  const { dispatchSidebarSelection, navigationMenu, searchResultsMutation, setTheSettings, settings, sidebarSelections } = { ...props }
  const [search, setSearch] = useState({ query: "" })

  // sets up results and search request
  useEffectOnUpdate(() => {
    searchResultsMutation(search)
  }, [search])

  return (
    <header className='flex-shrink-0 relative h-16 bg-white flex items-center'>

      <Logo />
      {/* <MobileApplicationSelectorDropdown applicationMenuSelections={sidebarSelections} dispatchApplicationMenu={dispatchSidebarSelection} />
      <MobileNavBarToggleDisplayButton setTheSettings={setTheSettings} /> */}

      <div className='hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between'>
        <SearchForm setSearch={setSearch} settings={settings} />
        <NavLinks navigation={navigationMenu} settings={settings} setTheSettings={setTheSettings} />
      </div>

      {/* <MobileNavigationMenu settings={settings} setTheSettings={setTheSettings} navigation={navigationMenu} /> */}

    </header>
  )
}
