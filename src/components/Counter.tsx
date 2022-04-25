import RefreshIcon from '@mui/icons-material/Refresh';
import { Button } from '@mui/material';
import React from 'react';

interface Props {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function Counter({ setCount }: Props) {
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleReset = () => setCount(0);
  return (
    <>
      <Button variant="contained" onClick={handleIncrement}>
        count +1
      </Button>
      <Button variant="outlined" onClick={handleReset}>
        reset <RefreshIcon />
      </Button>
    </>
  );
}
