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

  const { cacheData, linkGroupMutation, linkSaveMutation, setTheSettings, settings, fillInfo } = { ...props }

  //* State Vals (links & groups)
  const [name, setName] = useState((!fillInfo ? '' : fillInfo.name )) //=> Shared
  const [url, setUrl] = useState((!fillInfo ? '' : fillInfo.url)) //=> +Link
  const [groupsLinks, dispatchGroupsLinks] = useReducer(groupsLinksReducer, (!fillInfo ? [] : fillInfo.groupsLinks)) //==> +Group
  const [addTags, dispatchAddTag] = useReducer(addTagsReducer, (!fillInfo ? [] : fillInfo.addTags)) //==> Shared
  const [isPinned, setPinned] = useState((!fillInfo ? settings.addLinkDefPinned : fillInfo.isPinned)) //==> Shared

  //* Props objects
  const childComponents = [NameUrlAndLinks, BoolAttributes, SlideOverHeader, AddTagAutoComp]
  const formComponentProps = { name, setName, url, setUrl, groupsLinks, dispatchGroupsLinks, addTags, dispatchAddTag, isPinned, setPinned, settings, setTheSettings, cacheData, linkSaveMutation, linkGroupMutation }

  return (
    <SlideOverBase children={childComponents} {...formComponentProps} />
  )
}
