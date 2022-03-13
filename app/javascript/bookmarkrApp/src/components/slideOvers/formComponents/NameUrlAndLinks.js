import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {linkKey, groupKey} from '../utils/defaultSlideOverVals'

export default function NameUrlAndLinks(props) {
  
  return (
    <>
      <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label
          htmlFor="new-link-name"
          className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
        >
          Name:
        </label>
        <input
          type="text"
          name="new-name"
          id="new-link-name"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder=""
          onChange={(e) => props.setName(e.target.value)}
        />
      </div>

      {props.settings.slideOverActionType == linkKey && <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label
          htmlFor="new-link-url"
          className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
        >
          Url:
        </label>
        <input
          type="text"
          name="new-url"
          id="new-link-name"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder=""
          onChange={(e) => props.setUrl(e.target.value)}
        />
      </div>}

      {props.settings.slideOverActionType == groupKey &&
        <Autocomplete
          multiple
          autoComplete
          autoHighlight
          handleHomeEndKeys
          limitTags={3}
          filterSelectedOptions
          id="add-tag-autocomplete"
          options={props.links}
          getOptionLabel={(option) => option.name}
          defaultValue={ [props.links[0]] }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Links:"
              placeholder="add..."
            />
          )}
          onChange={(val) => props.dispatchGroupsLinks(val)}
        />}
    </>
  )
}
