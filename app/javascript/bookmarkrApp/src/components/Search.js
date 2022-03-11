// React & Lib
import React from 'react'
import { useState } from 'react'

// (&sub) Components
import Logo from './search/Logo'
import MobileApplicationSelectorDropdown from './search/MobileAppplicationSelectorDropdown'
import MobileNavBarToggleDisplayButton from './search/MobileNavBarToggleDisplayButton'
import SearchForm from './search/SearchForm'
import NavLinks from './search/NavLinks'
import MobileNavigationMenu from './search/MobileNavigationMenu'

// Hooks, Utils & Misc
import useEffectOnUpdate from '../hooks/useEffectOnUpdate'


export default function Search(props) {
  
  const { dispatchSidebarSelection, navigationMenu, searchResultsMutation, setTheSettings, settings, sidebarSelections } = { ...props }
  const [search, setSearch] = useState({ query: "" })

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
