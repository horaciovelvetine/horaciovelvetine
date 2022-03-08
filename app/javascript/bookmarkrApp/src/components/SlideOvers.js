import React from 'react'

import { Fragment, useState, useReducer } from 'react'
import { Dialog, Transition } from '@headlessui/react'




//(&sub-) Components
import SlideOverBase from './slideOvers/SlideOverBase'
import NameAndUrl from './slideOvers/formComponents/NameAndUrl'
import BoolAttributes from './slideOvers/formComponents/BoolAttributes'
import SliderHeader from './slideOvers/formComponents/SliderHeader'
import TagAutoComp from './slideOvers/formComponents/TagAutoComp'

// Hooks, Utils & Misc
import addTagsReducer from '../hooks/reducers/addTagsReducer'


export default function SlideOverMenus() {
  
  const actionType = () => props.actionTypeKey == "+Link" ? "newLink" : "newLinkGroup"

  //==> "Parent Object" (from NavLinks)
  const [name, setName] = useState("") //=> Shared
  const [url, setUrl] = useState("") //=> +Link
  const [groupsLinks, dispatchGroupsLinks] = useReducer(groupsLinksReducer, []) //==> +Group
  const [addTags, dispatchAddTag] = useReducer(addTagsReducer, []) //==> Shared
  const [isPinned, setPinned] = useState(false) //==> Shared
  

  
  return (
    <SlideOverBase />
  )
}
