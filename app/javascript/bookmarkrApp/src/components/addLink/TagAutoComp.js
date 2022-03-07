import React from 'react'
import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { createFilterOptions } from '@mui/material/Autocomplete';


const filter = createFilterOptions();

export default function TagAutoComp(props) {
  // makes sure to remove link associated obj's
  
  // See dialog and wrap Autocomplete in a fragment to get "Add whatever this thing is??"
  // => maybe start with some googling on dialog components from MUI
  // => Next big hurle is swapping movies for tags! 
  return (
    <Autocomplete
      multiple
      limitTags={3}
      id="tags-outlined"
      options={props.tags}
      getOptionLabel={(option) => option.name}
      defaultValue={[props.tags[0]]}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          label="Add & Filter Tags:"
          placeholder="..."
        />
      )}
    />
  )
}