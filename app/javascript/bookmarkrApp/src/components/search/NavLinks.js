//* React & Lib
import React from 'react'
import { Fragment } from 'react'

//* (&sub) Components
import Clock from './subComponents/Clock'

//! 
export default function NavLinks(props) {

  // config vars
  const { navigation, settings, setTheSettings } = { ...props }

  // opens slide appopriate slide over
  function handleAddLinkClick(event) {
    event.preventDefault()
    let settingKey = event.target.text
    setTheSettings(settingKey)
  }

  return (
    <div className='pr-4 flex-shrink-0 flex items-center space-x-10'>
      <nav aria-label='Global' className='flex space-x-6'>
        {navigation.map((link) => (
          <Fragment key={link.name}>
            <a href="/navigation" className='text-sm font-medium text-gray-900' onClick={(e) => handleAddLinkClick(e)}>
              {link.name}
            </a>
          </Fragment>
        ))}
        <Clock />
      </nav>
    </div>
  )
}


