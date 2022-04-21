import { Box, Button, Grid, Stack } from '@mui/material';
import React from 'react';

import MyPaper from 'components/items/myItems';

function Test0() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack direction="row" spacing={2}>
            <Button>AAA</Button>
            <Button variant="outlined">BBB</Button>
            <Button variant="contained">CCC</Button>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <MyPaper sx={{ width: '100%', height: 300 }}>Result:</MyPaper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Test0;
