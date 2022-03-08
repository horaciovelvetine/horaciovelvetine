//React + Lib Imports
import React from 'react'
import { Fragment, useState, useReducer } from 'react'
import { Dialog, Transition } from '@headlessui/react'

//(&sub-) Components
import NameAndUrl from './linkUtil/NameAndUrl'
import BoolAttributes from './slideOvers/BoolAttributes'
import SliderHeader from './linkUtil/SliderHeader'
import TagAutoComp from './linkUtil/TagAutoComp'

// Hooks, Utils & Misc
import linksTagsReducer from '../hooks/reducers/linksTagsReducer'


export default function LinkUtilSlideOver(props) {
  //Default component config info
  const tags = () => props.cacheData.data.data.attributes.tags

  // state items for input field values
  const [isNew, setIsNew] = useState(true) // => eventual change to also use slide over for Edit!~
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  const [linksTags, dispatchLinksTag] = useReducer(linksTagsReducer, [])
  const [isPinned, setPinned] = useState(false)
  const [isFlagged, setFlagged] = useState(false)


  function handleLinkSaveClick(event) {
    debugger
    props.linkUtilSaveMutation()
  }




  return (
    <Transition.Root show={props.settings.addLinkSlideOverOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={props.setTheSettings}>
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                  <div className="h-0 flex-1 overflow-y-auto">
                    <SliderHeader setTheSettings={props.setTheSettings} />

                    <div className="flex flex-1 flex-col justify-between">
                      <div className="divide-y divide-gray-200 px-4 sm:px-6">
                        <div className="space-y-6 pt-6 pb-5">
                          <NameAndUrl setName={setName} setUrl={setUrl} />

                          {props.cacheData && <TagAutoComp tags={tags()} dispatchLinksTags={dispatchLinksTag} />}

                          <BoolAttributes isCurFlagged={isFlagged} isCurPinned={isPinned} setFlagged={setFlagged} setPinned={setPinned} />

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 justify-end px-4 py-4">
                    <button
                      type="button"
                      className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => props.setTheSettings(settingKey)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={(e) => handleLinkSaveClick(e, name, url, linksTags, isPinned)}
                    >
                      Save
                    </button>
                  </div>

                </form>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}