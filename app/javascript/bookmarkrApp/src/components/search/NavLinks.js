// React & Lib
import React from 'react'
import { Fragment } from 'react'

// (&sub) Components
import Clock from './subComponents/Clock'

export default function NavLinks(props) {
  const { navigation, settings, setTheSettings } = { ...props }


  function handleAddLinkClick(event) {
    event.preventDefault()
    let action = event.target.innerText

    setTheSettings(action)
  }



  return (
    <div className='pr-4 flex-shrink-0 flex items-center space-x-10'>
      <nav aria-label='Global' className='flex space-x-6'>
        {navigation.map((link) => (
          <Fragment key={link.name}>
            <a href="/" className='text-sm font-medium text-gray-900' onClick={(e) => handleAddLinkClick(e)}>
              {link.name}
            </a>
          </Fragment>
        ))}
        <Clock />
      </nav>
    </div>
  )
}


