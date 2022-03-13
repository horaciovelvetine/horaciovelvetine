import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


export default function AddTagAutoComp(props) {
  const tagInfo = props.tags
  const curAddTags = props.addTags
  //==> ! Supposed to server up current add tags or the default add tag
  //TODO: setDefaultTag(s): possible setting // for edit should pass in curTags/Links
  const defaultValuePick = () => {
    if (props.addTags.length < 1) return [props.tags[3]]
    return props.addTags.map( t => t )
  }

  function handleChange(e, val) { 
    e.preventDefault()
    props.dispatchAddTag(val)
  }
  
  return (
    <Autocomplete
      multiple
      autoComplete
      autoHighlight
      handleHomeEndKeys
      limitTags={3}
      filterSelectedOptions
      id="add-tag-autocomplete"
      options={tagInfo}
      getOptionLabel={(option) => option.name}
      defaultValue={ [tagInfo[3]] }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Tags:"
          placeholder="add..."
        />
      )}
      onChange={(e, val) => handleChange(e, val)}
    />
  )
}
