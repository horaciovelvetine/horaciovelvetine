import React from 'react'
import { Fragment, useState, useReducer } from 'react'

//(&sub-) Components
import SlideOverBase from './slideOvers/SlideOverBase'
//==> handleSubmit & payload information
import NameAndUrl from './slideOvers/formComponents/NameAndUrl'
//==> setName, setUrl, name, url
import BoolAttributes from './slideOvers/formComponents/BoolAttributes'
//==> isPinned, setPinned
import SlideOverHeader from './slideOvers/formComponents/SlideOverHeader'
//==> setTheSettings, actionType
import TagAutoComp from './slideOvers/formComponents/TagAutoComp'
//==> tags 
// Hooks, Utils & Misc
import addTagsReducer from '../hooks/reducers/addTagsReducer'


export default function SlideOverMenus() {
  //* types: '+Link', 'editLink', '+Group', 'editGroup'
  const actionType = props.actionType

  //==> "Parent Object" (from NavLinks)
  const [name, setName] = useState("") //=> Shared
  const [url, setUrl] = useState("") //=> +Link
  const [groupsLinks, dispatchGroupsLinks] = useReducer(groupsLinksReducer, []) //==> +Group
  const [addTags, dispatchAddTag] = useReducer(addTagsReducer, []) //==> Shared
  const [isPinned, setPinned] = useState(false) //==> Shared
  
  const subComponents = { NameAndUrl, BoolAttributes, SlideOverHeader, TagAutoComp}
  
  return (
    <SlideOverBase children={subComponents}/>
  )
}
