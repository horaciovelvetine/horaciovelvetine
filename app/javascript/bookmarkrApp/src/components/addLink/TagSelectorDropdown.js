import React from 'react'
import { useState } from 'react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Combobox } from '@headlessui/react'

//bool declares which className var to use 
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TagSelectorDropdown(props) {
  // Default constants
  const tags = props.tags

  return (
  <>Some tags</>)
}
