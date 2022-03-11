import React from 'react'
import { Link } from 'react-router-dom'
import sidebarTargetFinder from './utils/sidebarTargetFinder'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SidebarSelections(props) {

  const sidebarSelections = props.sidebarSelections

  function handleSelectionClick(e) {
    //==> finds target name and sets curSelection to target
    const target = sidebarTargetFinder(e.target)
    props.dispatchSidebarSelection(target)    
  }

  return (

    <nav aria-label='Sidebar' className='hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto'>
      <div className='relative w-20 flex flex-col p-3 space-y-3'>

        {/* //Maps over menu items (/config/defaultStateItems) */}
        {sidebarSelections.map((selection) => {
          return (
            <Link
              id={`${selection.name}-link`}
              key={`${selection.order}`}
              to={`${selection.url}`}
              onClick={(e) => handleSelectionClick(e)}
              className={classNames(
                selection.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700',
                'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
              )} >
              <selection.icon className='h-6 w-6' aria-hidden='true' id={`${selection.name}-icon`} />
            </Link>
          )
        })}

      </div>
    </nav>
  )
}
