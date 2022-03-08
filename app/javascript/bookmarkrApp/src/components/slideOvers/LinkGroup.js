//React + Lib Imports
import React from 'react'
import { Fragment, useState, useReducer } from 'react'
import { Dialog, Transition } from '@headlessui/react'

//(&sub-) Components
import NameAndUrl from './linkUtil/NameAndUrl'
import BoolAttributes from './formComponents/BoolAttributes'
import SliderHeader from './linkUtil/SliderHeader'
import TagAutoComp from './linkUtil/TagAutoComp'

// Hooks, Utils & Misc
import groupsLinksReducer from '../../hooks/reducers/linksTagsReducer'


export default function LinkGroupUtil() {
  const [isNew, setIsnew] = useState(true) // => ditto eventual
  const [name, setName] = useState("")
  const [groupsLinks, dispatchGroupsLinks] = useReducer( groupsLinksReducer, [])
  const [isPinned, setPinned] = useState(false) 

  return (
    <>
    </>
  )
}
