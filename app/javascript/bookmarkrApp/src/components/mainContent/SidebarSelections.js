import React from 'react'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SidebarSelections(props) {

  function intervene(e) {
    e.preventDefault()
    if (!e.target.id) console.log("null")
    console.log(e.target.id)
    // debugger
    //! Very inconsistent success of ea click... id call is not always right
    //! if no id, call next nearest (figure clicking span possibly??)
  }

  return (

    <nav aria-label='Sidebar' className='hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto'>
      <div className='relative w-20 flex flex-col p-3 space-y-3' onClick={(e) => intervene(e)}>

        {/* //Maps over menu items (/config/defaultStateItems) */}
        {props.sidebarSelections.map((selection) => {
          return (
            <Link
              id={`${selection.name}`}
              key={`${selection.order}`}
              to={`${selection.url}`}
              onChange={(e) => intervene(e)}
              className={classNames(
                selection.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700',
                'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
              )} >
              <selection.icon className='h-6 w-6' aria-hidden='true' id={`${selection.name}`} onChange={(e) => intervene(e)} />
            </Link>
          )
        })}

      </div>
    </nav>
  )
}
