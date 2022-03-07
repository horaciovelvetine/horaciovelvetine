import React from 'react'
import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { createFilterOptions } from '@mui/material/Autocomplete';


const filter = createFilterOptions();

export default function TagAutoComp(props) {

  function eventHandler(e, val) {
    e.preventDefault()
    props.dispatchLinksTags(val)
  }
  return (
    <Autocomplete
      multiple
      autoComplete
      autoHighlight
      clearOnBlur
      onChange={(e, val) => eventHandler(e,val)}
      handleHomeEndKeys
      limitTags={3}
      id="tags-outlined"
      options={props.tags}
      getOptionLabel={(option) => option.name}
      defaultValue={[props.tags[3]]}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          label="Tags:"
          placeholder="..."
        />
      )}
    />
  )
}