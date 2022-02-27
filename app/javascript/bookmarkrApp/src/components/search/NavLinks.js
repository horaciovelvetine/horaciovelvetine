// React & Lib
import React from 'react'

// (&sub) Components
import Clock from './subComponents/Clock'

export default function NavLinks() {
  debugger

  const navigation = props.navigation
  return (
    <div className='pr-4 flex-shrink-0 flex items-center space-x-10'>
      <nav aria-label='Global' className='flex space-x-6'>
        {navigation.map((link) => (
          <Fragment key={link.name}>
            <a href={link.href} className='text-sm font-medium text-gray-900'>
              {link.name}
            </a>
          </Fragment>
        ))}
        <Clock />
      </nav>
    </div>
  )
}
