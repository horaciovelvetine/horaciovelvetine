import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


export default function AddTagAutoComp(props) {

  return (
    <Autocomplete
      multiple
      autoComplete
      autoHighlight
      handleHomeEndKeys
      limitTags={3}
      filterSelectedOptions
      id="add-tag-autocomplete"
      options={props.tags}
      getOptionLabel={(option) => option.name}
      defaultValue={ props.addTags.length < 1 ? [props.tags[3]] : props.addTags }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Tags:"
          placeholder="add..."
        />
      )}
      onChange={(val) => props.dispatchAddTag(val)}
    />
  )
}
