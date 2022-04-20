import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';

function Test1() {
  return (
    <Autocomplete
      id="inputDemo"
      freeSolo
      options={['AAA', 'BBB', 'CCC']}
      renderInput={(params) => <TextField variant="outlined" {...params} label="inputDemo" />}
    />
  );
}

export default Test1;
