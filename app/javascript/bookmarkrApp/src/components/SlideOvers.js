import React from 'react'
import { useState, useReducer } from 'react'

//(&sub-) Components
import SlideOverBase from './slideOvers/SlideOverBase'
import NameUrlAndLinks from './slideOvers/formComponents/NameUrlAndLinks'
import BoolAttributes from './slideOvers/formComponents/BoolAttributes'
import SlideOverHeader from './slideOvers/formComponents/SlideOverHeader'
import AddTagAutoComp from './slideOvers/formComponents/AddTagAutoComp'

// Hooks, Utils & Misc
import addTagsReducer from '../hooks/reducers/addTagsReducer'
import groupsLinksReducer from '../hooks/reducers/groupsLinksReducer'

export default function SlideOvers(props) {

  const { cacheData, linkGroupMutation, linkSaveMutation, setTheSettings, settings } = { ...props }

  //* State Vals
  //==> "Parent Object" (from NavLinks)
  const [name, setName] = useState("") //=> Shared
  const [url, setUrl] = useState("") //=> +Link
  const [groupsLinks, dispatchGroupsLinks] = useReducer(groupsLinksReducer, []) //==> +Group
  const [addTags, dispatchAddTag] = useReducer(addTagsReducer, []) //==> Shared
  const [isPinned, setPinned] = useState(settings.addLinkDefPinned) //==> Shared

  //* Props objects
  const childComponents = [NameUrlAndLinks, BoolAttributes, SlideOverHeader, AddTagAutoComp]
  const formComponentProps = { name, setName, url, setUrl, groupsLinks, dispatchGroupsLinks, addTags, dispatchAddTag, isPinned, setPinned, settings, setTheSettings, cacheData, linkSaveMutation, linkGroupMutation }

  return (
    <SlideOverBase children={childComponents} {...formComponentProps} />
  )
}
