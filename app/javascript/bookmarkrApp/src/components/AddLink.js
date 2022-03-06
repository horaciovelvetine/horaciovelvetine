//React + Lib Imports
import React, { Children } from 'react'
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'

//(&sub-) Components
import TextAttributes from './addLink/TextAttributes'
import BoolAttributes from './addLink/BoolAttributes'
import FooterButtons from './addLink/FooterButtons'
import TagSelector from './addLink/TagSelector'
import SliderHeader from './addLink/SliderHeader'


export default function AddLink(props) {
  //Default component config info
  const open = props.settings.addLinkSlideOverOpen

  // state items for input field values
  const [isNew, setIsNew] = useState(true) // => see comment below
  const [name, setName] = useState("") // => refactor to make also avail for edit link?? 
  const [url, setUrl] = useState("") // => ditto
  const [isPinned, setPinned] = useState(false)
  const [isFlagged, setFlagged] = useState(false)


  function handleLinkSaveClick(event) {
    debugger
    //!!!!!need to get the values 
    //TODO Start here getting values form submitted form add Link
    // TODO add tag information and dispaly to addLink (selectabl buttons like above where on click name gets added to an array and toggle that)



    props.linkSaveMutation()
  }

  useEffect(() => {
    console.log(`Name:${name}` + ' ' + `Url:${url}`)
  }, [name, url])


  return (
    <Transition.Root show={open} as={Fragment}>
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
                    { /* //! HERE */}
                    <SliderHeader setTheSettings={props.setTheSettings}/>

                    <div className="flex flex-1 flex-col justify-between">
                      <div className="divide-y divide-gray-200 px-4 sm:px-6">
                        <div className="space-y-6 pt-6 pb-5">

                          {/* //! HERE */}
                          <TextAttributes setName={setName} setUrl={setUrl} />

                          {/* //! HERE */}
                          { props.cacheData && <TagSelector tags={props.cacheData} />}

                          {/* //! HERE */}
                          <BoolAttributes isCurFlagged={isFlagged} isCurPinned={isPinned} setFlagged={setFlagged} setPinned={setPinned} />

                        </div>
                      </div>
                    </div>
                  </div>
                  <FooterButtons setTheSettings={props.setTheSettings} handleLinkSaveClick={handleLinkSaveClick} settings={props.settings}/>

                </form>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
