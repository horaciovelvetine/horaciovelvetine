import React from 'react'
import { useState, useReducer } from 'react'

//(&sub-) Components
import SlideOverBase from './slideOvers/SlideOverBase'
import NameAndUrl from './slideOvers/formComponents/NameAndUrl'
import BoolAttributes from './slideOvers/formComponents/BoolAttributes'
import SlideOverHeader from './slideOvers/formComponents/SlideOverHeader'
import TagAutoComp from './slideOvers/formComponents/TagAutoComp'

// Hooks, Utils & Misc
import addTagsReducer from '../hooks/reducers/addTagsReducer'

export default function SlideOverMenus(props) {
  //* Types: '+Link', 'editLink', '+Group', 'editGroup'
  const actionType = props.actionType
  const tagsInfo = () => props.data.data.attributes.tags
  const linksInfo = () => props.data.data.attributes.links
  const { linkMutation, linkGroupMutation, linkSaveIdle, linkGroupIdle, linkSaveSuccess, linkGroupSaveSuccess
  } = { ...props }
  
  //* State Vals
  //==> "Parent Object" (from NavLinks)
  const [name, setName] = useState("") //=> Shared
  const [url, setUrl] = useState("") //=> +Link
  const [groupsLinks, dispatchGroupsLinks] = useReducer(groupsLinksReducer, []) //==> +Group
  const [addTags, dispatchAddTag] = useReducer(addTagsReducer, []) //==> Shared
  const [isPinned, setPinned] = useState(false) //==> Shared
  
  //* Props objects
  const subComponents = { NameAndUrl, BoolAttributes, SlideOverHeader, TagAutoComp }
  const nameProps = { name, setName, url, setUrl }
  const boolProps = { isPinned, setPinned }
  const autoCompProps = { tagsInfo, linksInfo, groupsLinks, addTags, dispatchAddTag, dispatchGroupsLinks }
  const slideOverMutationProps = {
    linkMutation, linkGroupMutation, linkSaveIdle, linkGroupIdle, linkSaveSuccess, linkGroupSaveSuccess,
  }


  return (
    <SlideOverBase children={...subComponents} actionType={actionType} {...slideOverMutationProps} {...nameProps} {...boolProps} {...autoCompProps} />
  )
}
