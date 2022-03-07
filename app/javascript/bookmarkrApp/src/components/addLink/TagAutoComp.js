import React from 'react'
import { useState } from 'react'
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { createFilterOptions } from '@mui/material/Autocomplete';


const filter = createFilterOptions();

export default function TagAutoComp(props) {
  // makes sure to remove link associated obj's
  const tags = props.tags.map((t) => ({ id: t.id, name: t.name }))

  const [value, setValue] = useState(null)
  const [open, toggleOpen] = useState(false)

  const handleClose = () => {
    setDialogValue({
      name: '',
      id: '',
    })
    toggleOpen(false)
  }

  const [dialogValue, setDialogValue] = useState({
    name: '',
    id: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    setValue({
      name: dialogValue.name,
      id: `${tags.length + 1}`
    })
    handleClose()
  }
  // See dialog and wrap Autocomplete in a fragment to get "Add whatever this thing is??"
  // => maybe start with some googling on dialog components from MUI
  // => Next big hurle is swapping movies for tags! 
  return (
    <React.Fragment>
      <Autocomplete
        multiple
        limitTags={3}
        id="tags-filled"

        options={tags.map((option) => option.name)}

        defaultValue={[tags[0]]}

        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,

              name: `Add "${params.inputValue}"`,
            });
          }

          return [...new Set(filtered.map(tag => tag))];
        }}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            return (<Chip variant="outlined" label={option.name} {...getTagProps({ index })} key={option.id} />)
          })
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Tags:"
            placeholder="Add by name..."
            size="string"
          />
        )}
      />
    </React.Fragment>
  )
}