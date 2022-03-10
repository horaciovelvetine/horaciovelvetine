import React from 'react'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
        {props.sidebarSelections.map((selection) => {
          <Link
            onClick={e => setCurrentSelection(e)}
            key={selection.name + '-' + selection.order}
            to={`${selection.url}`}
            className={classNames(
              selection.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700',
              'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
            )} >
            <span className='sr-only'>{selection.name}</span>
            <selection.icon className='h-6 w-6' aria-hidden='true' />
          </Link>
        })}z

      </div>
    </nav>
  )
}
