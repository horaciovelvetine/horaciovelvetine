// React & Lib
import React from 'react'
import { useState } from 'react'
import { useQueryClient, QueryClient, QueryClientProvider } from 'react-query'

// (&sub) Components
import Logo from './search/Logo'
import MobileContextsSelectorDropdown from './search/MobileContextsSelectorDropdown'
import MobileNavBarToggleDisplayButton from './search/MobileNavBarToggleDisplayButton'
import SearchForm from './search/SearchForm'
import NavLinks from './search/NavLinks'
import MobileNavigationMenu from './search/MobileNavigationMenu'

export default function Search(props) {
  const queryClient = useQueryClient()
  const [search, setSearch] = useState({ query: "" })

  debugger


  return (
    <header className='flex-shrink-0 relative h-16 bg-white flex items-center'>
      <Logo />
      <MobileContextsSelectorDropdown contextsMenuSelections={props.contextsMenuSelections} dispatchContextMenu={props.dispatchContextMenu} />
      <MobileNavBarToggleDisplayButton setTheSettings={props.setTheSettings} />

      <div className='hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between'>
        <SearchForm setSearch={setSearch} bounceDelay={props.settings.searchDeBounceDelay} />
        <NavLinks navigation={props.navigation} />
      </div>
      <MobileNavigationMenu settings={props.settings} setTheSettings={props.setTheSettings} navigation={props.navigation} />
    </header>
  )
}
