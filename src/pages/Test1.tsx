import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import InputPassword from 'components/LogIn';
import { MyPaper } from 'components/myStyled';

function Test1() {
  const [result] = useState('');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack direction="row" spacing={2}>
            <InputPassword />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <MyPaper sx={{ width: '100%', height: 300 }}>
            <Typography variant="h4">Result:</Typography>
            <Typography align="center" variant="h6" sx={{ fontSize: '5em' }}>
              {result}
            </Typography>
          </MyPaper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Test1;
