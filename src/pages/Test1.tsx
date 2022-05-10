import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import { MyPaper } from 'components/myStyled';
import { InputPassword } from '~/features/member/LogIn';

function Test1() {
  const [result] = useState('');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
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
