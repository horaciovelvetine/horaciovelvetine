import React from 'react'
import LogoLink from './Search/logoLink'

export default function Search() {
  return (
    <header className='flex-shrink-0 relative h-16 bg-white flex items-center'>
      <LogoLink />

			//! Ele[X] Needs Contects
      <div className='mx-auto md:hidden'>
        <div className='relative'>
          <label htmlFor='inbox-select' className='sr-only'>
            Select context
          </label>
          <MobileContextsDropdown configObject={props} />
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2'>
            <ChevronDownIcon className='h-5 w-5 text-gray-500' aria-hidden='true' />
          </div>
        </div>
      </div>


      <div className='absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden'>
				//? SetmobileMenuOpen stateful
        <MobileNavBarToggleDisplayButton configObject={props} />
      </div>
			//! Ele[X] DONE
      <div className='hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between'>
        <div className='min-w-0 flex-1'>
          <div className='max-w-2xl relative text-gray-400 focus-within:text-gray-500'>
            <label htmlFor='desktop-search' className='sr-only'>
              Search
            </label>
            <SearchForm search={search} dispatchSearch={dispatchSearch} />
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4'>
              <SearchIcon className='h-5 w-5' aria-hidden='true' />
            </div>
          </div>
        </div>
				//? Needs list of nav items
        <NavLinks configObject={props} />
      </div>
			//? MobileMenuOpen//and setMobileMenuOpen//+Navgation items
      <MobileNavMenu configObject={props} />
    </header>
  )
}
