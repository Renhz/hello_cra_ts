import TextField from '@mui/material/TextField';
import React, { ChangeEvent, useState } from 'react';

const InputPassword = function InputPassword() {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <TextField
      id="password"
      label="密碼"
      variant="outlined"
      sx={{ width: 300 }}
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default InputPassword;

/*

    

*/
