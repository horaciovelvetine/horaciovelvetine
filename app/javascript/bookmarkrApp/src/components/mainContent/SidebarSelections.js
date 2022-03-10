import React from 'react'

export default function SidebarSelections(props) {

  function setCurrentSelection(e) {
    e.preventDefault()
    target = e.target
    props.dispatchSidebarSelection(target)
    debugger
  }
  
  return (

    <nav aria-label='Sidebar' className='hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto'>
      <div className='relative w-20 flex flex-col p-3 space-y-3'>

        {/* //Maps over menu items (/config/defaultStateItems) */}
        {props.applicationMenuSelections.map((menuSelection) => {
          return (
            <Link
              onClick={e => setCurrentSelection(e)}
              key={menuSelection.name + '-' + menuSelection.order}
              to={`${menuSelection.url}`}
              className={classNames(
                menuSelection.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700',
                'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
              )} >
              <span className='sr-only'>{menuSelection.name}</span>
              <menuSelection.icon className='h-6 w-6' aria-hidden='true' />
            </Link>)
        })}

      </div>
    </nav>
  )
}
