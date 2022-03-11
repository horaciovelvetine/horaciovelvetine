/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/solid'
import { RestaurantMenu } from '@mui/icons-material'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const editKey = 'Edit Link'

export default function ResultOptionsDrowdownButton(props) {

  const { setTheSettings, linkDelMutation, link, setSoFill } = { ...props }

  const soFillObj = (d) => {
    const tempFillObj = { id: d.id, name: d.name, url: d.href, addTags: d.tags, isPinned: d.isPinned }
    return tempFillObj
  }

  function editLinkHandler(e, link) {
    e.preventDefault()
    setSoFill(soFillObj(link))
    setTheSettings(editKey)
  }

  function delLinkHandler(e, link) {
    e.preventDefault()
    linkDelMutation({ id: link.id })
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="bg-gray-100 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <span className="sr-only">Open options</span>
          <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item onClick={(e) => editLinkHandler(e, link)}>
              {({ active }) => (
                <span

                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Edit
                </span>
              )}
            </Menu.Item>
            <Menu.Item onClick={(e) => delLinkHandler(e, link)}>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-red-900' : 'text-red-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Delete
                </span>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
