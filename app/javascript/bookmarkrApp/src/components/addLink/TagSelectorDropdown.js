import React from 'react'
import { useState, useReducer } from 'react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Combobox } from '@headlessui/react'




//bool declares which className var to use 
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function TagSelectorDropdown(props) {
  // Default constants
  const tags = props.tags
  // list of tags to associate to new link should add on click tag button, or search enter of combobox
  const [selectedTags, setSelectedTags] = useReducer(addTagReducer, [])




  return (
    <></>
  )
}



/* 
<Combobox> 
  <Input = where searching happens (displayValue={whatshowsinsearchfield})/>
  <Button = ?? />
  <Options = list to select from />
  <Option = current selection/>
  <Label = ?? />
</Combobox >

*/