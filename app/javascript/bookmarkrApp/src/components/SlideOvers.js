import React from 'react'
import { useState, useReducer } from 'react'

//(&sub-) Components
import SlideOverBase from './slideOvers/SlideOverBase'
import NameAndUrl from './slideOvers/formComponents/NameAndUrl'
import BoolAttributes from './slideOvers/formComponents/BoolAttributes'
import SlideOverHeader from './slideOvers/formComponents/SlideOverHeader'
import AddTagAutoComp from './slideOvers/formComponents/AddTagAutoComp'

// Hooks, Utils & Misc
import addTagsReducer from '../hooks/reducers/addTagsReducer'
import groupsLinksReducer from '../hooks/reducers/groupsLinksReducer'

export default function SlideOvers(props) {
  // const linksInfo = () => cacheData.data.data.attributes.links
  const {cacheData, linkGroupData, linkGroupIdle, linkGroupMutation, linkGroupSaveSuccess, linkSaveData, linkSaveIdle, linkSaveMutation, linkSaveSuccess, setTheSettings, settings }= {...props}

  
  //* State Vals
  //==> "Parent Object" (from NavLinks)
  const [name, setName] = useState("") //=> Shared
  const [url, setUrl] = useState("") //=> +Link
  const [groupsLinks, dispatchGroupsLinks] = useReducer(groupsLinksReducer, []) //==> +Group
  const [addTags, dispatchAddTag] = useReducer(addTagsReducer, []) //==> Shared
  const [isPinned, setPinned] = useState(null) //==> Shared
  
  //* Props objects
  const childComponents = [ NameAndUrl, BoolAttributes, SlideOverHeader, AddTagAutoComp ]
  const formComponentProps = {name, setName, url, setUrl, groupsLinks, dispatchGroupsLinks, addTags, dispatchAddTag, isPinned, setPinned, settings, setTheSettings }
  const slideOverMutationProps = {
    linkSaveMutation, linkGroupMutation, linkSaveIdle, linkGroupIdle, linkSaveSuccess, linkGroupSaveSuccess,
  }


  return (
    <SlideOverBase children={childComponents} settings={props.settings} setTheSettings={props.setTheSettings} {...slideOverMutationProps} {...formComponentProps} cacheData={cacheData} />
  )
}
