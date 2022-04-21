import { Box, Grid, Stack } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';

import MyPaper from 'components/items/myItems';

function Test1() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack direction="row" spacing={2}>
            <Autocomplete
              sx={{ width: 300 }}
              id="inputDemo"
              freeSolo
              options={['AAA', 'BBB', 'CCC']}
              renderInput={(params) => (
                <TextField variant="outlined" {...params} label="inputDemo" />
              )}
            />
            <MyPaper sx={{ width: 200 }}>MAX</MyPaper>
            <MyPaper sx={{ width: 100 }}>WIN</MyPaper>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <MyPaper sx={{ width: '100%', height: 300 }}>Result:</MyPaper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Test1;
