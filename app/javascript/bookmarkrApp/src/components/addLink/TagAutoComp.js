import React from 'react'
import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { createFilterOptions } from '@mui/material/Autocomplete';


const filter = createFilterOptions();

export default function TagAutoComp(props) {

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