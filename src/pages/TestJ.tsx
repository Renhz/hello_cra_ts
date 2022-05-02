import { Box, Grid, Stack, Typography, Input } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { MyPaper } from 'components/myStyled';

function hanoi(disc: number, src: number = 2, aux: number = 1, dst: number = 0): any | never {
  const discs: any[] = [];
  for (let i = 1; i <= disc; i += 1) {
    discs.push(i);
  }
  const towers = ['A柱', 'B柱', 'C柱'];
  const state: any[] = [[], [], [...discs]];
  let result = '';
  function move(idx: number, s: number = 2, a: number = 1, d: number = 0): any | never {
    if (idx > 0 && idx < 10) {
      move(idx - 1, s, d, a);
      result = `${result}將圓盤${idx}從${towers[s]}移到${towers[d]}, `;
      state[s].shift(idx);
      state[d].unshift(idx);
      move(idx - 1, a, s, d);
    }
  }
  move(disc, src, aux, dst);
  return result;
}

function TestJ() {
  const [inputValue, setInput] = useState(0);
  const [result, setResult] = useState('');
  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    setResult(hanoi(inputValue));
  }, [inputValue]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <Stack direction="row" spacing={2}>
            <Input value={inputValue} onChange={handleInputChange} />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <MyPaper sx={{ width: '100%', height: 300 }}>
            <Typography variant="h4">Result:</Typography>
            <Typography align="center" sx={{ fontSize: 5 }}>
              {result}
            </Typography>
          </MyPaper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TestJ;
