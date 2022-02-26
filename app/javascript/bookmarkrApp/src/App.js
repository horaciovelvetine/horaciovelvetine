import React from 'react'
import Results from './components/Results'
import Search from './components/Search'

export default function App(props) {
  debugger

  return (
    <div className='h-screen flex flex-col'>
      {/* //! Logo area */}
      <Search />
      <Results />
    </div>
  )
}


/* 
- Request Made
- First up bookmarkr JS...
- Init index request with application (No Async)
  - 
- While awaiting promise main DOM containers Render page Elements
  - Search
    - Contains All Menu Components (including mobile variants):
      - Context Selector Dropdown (mobile)
      - Mobile Navbar (mobile)
      - Search Form 
      - Navbar Links 
      - Clock 
  - Results
    Contains the actual results & Tag cloud TBD



*/