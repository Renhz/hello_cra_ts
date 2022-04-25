import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import Counter from 'components/Counter';
import { MyPaper } from 'components/myStyled';

function Test0() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack direction="row" spacing={2}>
            <Counter initialCount={initialCount} setCount={setCount} />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <MyPaper sx={{ width: '100%', height: 300 }}>
            <Typography variant="h4">Result:</Typography>
            <Typography align="center" variant="h6" sx={{ fontSize: '5em' }}>
              {count}
            </Typography>
          </MyPaper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Test0;
