import { Box, Grid, Stack } from '@mui/material';
import React from 'react';

import InputPassword from 'components/InputAccount';
import { MyPaper } from 'components/myStyled';

function Test1() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack direction="row" spacing={2}>
            <InputPassword />
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
