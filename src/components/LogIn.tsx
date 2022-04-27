﻿import TextField from '@mui/material/TextField';
import React, { ChangeEvent, useState } from 'react';

const validatePassword = (inputValue: string) => {
  const result = [];
  if (inputValue.length <= 8) {
    result.push('長度須大於8個字');
  }
  if (!/[A-Z]+/.test(inputValue)) {
    result.push('須包含至少1個大寫英文字');
  }
  if (!/[0-9]+/.test(inputValue)) {
    result.push('須包含至少1個數字');
  }
  if (result.length > 0) {
    throw new Error(result.join(', '));
  }
};

const InputPassword = function InputPassword() {
  const [inputValue, setInputValue] = useState('');
  const [helptext, setHelpText] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  const handleBlur = () => {
    try {
      validatePassword(inputValue);
      setHelpText('');
    } catch (e: any) {
      setHelpText(e.message);
    }
  };
  return (
    <TextField
      id="password"
      label="密碼"
      variant="outlined"
      sx={{ width: 300 }}
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!helptext}
      helperText={helptext}
    />
  );
};

export default InputPassword;