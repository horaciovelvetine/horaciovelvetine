// React & Lib
import React from 'react'

// (&sub) Components
import Logo from './search/Logo'
import MobileContextsDropdown from './search/MobileContextsDropdown'
import MobileNavBarToggleDisplayButton from './search/MobileNavBarToggleDisplayButton'
import SearchForm from './search/SearchForm'


export default function Search() {
  const [query, setQuery] = useState("")

  return (
    <header className='flex-shrink-0 relative h-16 bg-white flex items-center'>
      <Logo /> //! done
      <MobileContextsSelectorDropdown /> //! done
      <MobileNavBarToggleDisplayButton /> //! done

      <div className='hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between'>
        <SearchForm /> //! done
        <NavLinks /> //! done
      </div>
      <MobileNavigationMenu />
    </header>
  )
}
