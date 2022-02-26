import React from 'react'
import Logo from './search/Logo'
import MobileContextsDropdown from './search/mobileContextsDropdown'
import MobileNavBarToggleDisplayButton from './search/MobileNavBarToggleDisplayButton'
import SearchForm from './search/SearchForm'

export default function Search() {
  return (
    <header className='flex-shrink-0 relative h-16 bg-white flex items-center'>
      <Logo/>
      <MobileContextsDropdown />
      <MobileNavBarToggleDisplayButton />

      <div className='hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between'>
      <SearchForm />
				//? Needs list of nav items
        <NavLinks configObject={props} />
      </div>
			//? MobileMenuOpen//and setMobileMenuOpen//+Navgation items
      <MobileNavMenu configObject={props} />
    </header>
  )
}
