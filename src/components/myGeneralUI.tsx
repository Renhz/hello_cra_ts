import { Switch, SwitchProps } from '@mui/material/';
import { createTheme, Theme } from '@mui/material/styles';
import * as React from 'react';

import DashboardContext from './myContext';

function SwitchColorMode({ className }: SwitchProps) {
  const { setTheme } = React.useContext(DashboardContext);
  const toggleColorMode = () => {
    setTheme(({ palette: { mode: prevMode } }: Theme) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      const newTheme = createTheme({
        palette: {
          mode: newMode,
        },
      });
      localStorage.setItem('colorMode', newMode);
      return newTheme;
    });
  };
  return (
    <Switch
      onChange={toggleColorMode}
      checked={localStorage.getItem('colorMode') === 'dark'}
      className={className}
    />
  );
}

export default SwitchColorMode;
