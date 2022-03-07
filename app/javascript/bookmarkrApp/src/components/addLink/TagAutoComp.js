import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function TagAutoComp() {
  return (
    <>
      <Autocomplete
        multiple
        limitTags={3}
        id="tags-filled"
        options={top100Films.map((option) => option.title)}
        defaultValue={[top100Films[13].title]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="freeSolo"
            placeholder="Favorites"
          />
        )}
      />
    </>
  )
}
