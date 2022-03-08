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
import groupsLinksReducer from '../hooks/reducers/groupsLinksReducer'

export default function SlideOverMenus(props) {
  //* Types: '+Link', '+Group',
  const actionType = props.settings.slideOverActionType
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
  const childComponents = [ NameAndUrl, BoolAttributes, SlideOverHeader, TagAutoComp ]
  const formComponentProps = {name, setName, url, setUrl, groupsLinks, dispatchGroupsLinks, addTags, dispatchAddTag, isPinned, setPinned, tagsInfo, linksInfo, }
  const slideOverMutationProps = {
    linkMutation, linkGroupMutation, linkSaveIdle, linkGroupIdle, linkSaveSuccess, linkGroupSaveSuccess,
  }


  return (
    <SlideOverBase children={childComponents} actionType={actionType} settings={props.settings} setTheSettings={props.setTheSettings} {...slideOverMutationProps} {...formComponentProps} />
  )
}
