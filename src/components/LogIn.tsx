import TextField from '@mui/material/TextField';
import React, { ChangeEvent, useState } from 'react';

import { validatePassword, generateHelptext } from '../features/member/LoginUtils';

export const InputPassword = function InputPassword() {
  const [inputValue, setInputValue] = useState('');
  const [helptext, setHelpText] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  React.useEffect(() => {
    if (inputValue) {
      setHelpText(generateHelptext(validatePassword(inputValue)));
    }
  }, [inputValue]);
  return (
    <TextField
      id="password"
      label="密碼"
      variant="outlined"
      sx={{ width: 300 }}
      value={inputValue}
      onChange={handleChange}
      error={!!helptext}
      helperText={helptext}
    />
  );
};

export const InputAccount = function InputAccount() {
  const [inputValue, setInputValue] = useState('');
  const [helptext, setHelpText] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  React.useEffect(() => {
    setHelpText(generateHelptext(validatePassword(inputValue)));
  }, [inputValue]);
  return (
    <TextField
      id="account"
      label="帳號"
      variant="outlined"
      sx={{ width: 300 }}
      value={inputValue}
      onChange={handleChange}
      error={!!helptext}
      helperText={helptext}
    />
  );
};
