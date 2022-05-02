import { Switch, SwitchProps } from '@mui/material/';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/features/store';

import { switchColorMode } from './themeSlice';

function SwitchColorMode({ className }: SwitchProps) {
  const colorMode = useSelector((state: RootState) => state.theme.colorMode);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(switchColorMode());
  };
  React.useEffect(() => {
    localStorage.setItem('colorMode', colorMode);
  }, [colorMode]);
  return <Switch onChange={handleChange} checked={colorMode === 'dark'} className={className} />;
}

export default SwitchColorMode;
