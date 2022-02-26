import React from 'react'

export default function MobileContextsDropdown() {
  return (
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
  )
}
