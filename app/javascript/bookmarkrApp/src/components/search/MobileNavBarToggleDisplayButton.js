// React & Lib
import React from 'react'
import { MenuIcon } from '@heroicons/react/outline';


export default function MobileNavBarToggleDisplayButton() {
  debugger
  // const setMobileMenuOpen = 

  return (
    <div>
      <div className='absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden'>
        <button
          type='button'
          className='-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600'
          onClick={() => setMobileMenuOpen(true)}>
          <span className='sr-only'>Open main menu</span>
          <MenuIcon className='block h-6 w-6' aria-hidden='true' />
        </button>
      </div>
    </div>
  )
}
