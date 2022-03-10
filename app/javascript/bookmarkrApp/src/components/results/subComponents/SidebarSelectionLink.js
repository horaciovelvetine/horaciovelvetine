import React from 'react'

export default function SidebarSelectionLink(props) {
let menuSelection = props.menuSelection
  return (
    <a
      key={menuSelection.order}
      href={menuSelection.url}
      className={classNames(
        menuSelection.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700',
        'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
      )}>
      <span className='sr-only'>{menuSelection.name}</span>
      <select.icon className='h-6 w-6' aria-hidden='true' />
    </a>
  );

}
