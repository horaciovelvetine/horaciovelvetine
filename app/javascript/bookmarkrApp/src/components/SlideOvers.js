import React from 'react'
import { useState, useReducer, useEffect } from 'react'

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

  // config vars
  const { cacheData, linkGroupMutation, linkSaveMutation, setTheSettings, settings, fillInfo } = { ...props }

  // state Vals (links & groups)
  const [name, setName] = useState(fillInfo.name) //=> Shared
  const [url, setUrl] = useState(fillInfo.url)//=> +Link
  const [groupsLinks, dispatchGroupsLinks] = useReducer(groupsLinksReducer, []) //==> +Group
  const [addTags, dispatchAddTag] = useReducer(addTagsReducer, fillInfo.addTags) //==> Shared
  const [isPinned, setPinned] = useState(settings.addLinkDefPinned) //==> Shared

  // props objects
  const childComponents = [NameUrlAndLinks, BoolAttributes, SlideOverHeader, AddTagAutoComp]
  const formComponentProps = { name, setName, url, setUrl, groupsLinks, dispatchGroupsLinks, addTags, dispatchAddTag, isPinned, setPinned, settings, setTheSettings, cacheData, linkSaveMutation, linkGroupMutation }


  //!
  return (
    <>
    {/* //* SLIDE OVER MENUS
      add and edit forms for links and groups */}
    <SlideOverBase children={childComponents} {...formComponentProps} />
    </>
  )
}
