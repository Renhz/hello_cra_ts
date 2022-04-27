import { createTheme, ThemeProvider } from '@mui/material/styles';
import { render, RenderOptions } from '@testing-library/react';
import * as React from 'react';

interface MyThemeProviderProps {
  children: React.ReactNode;
}

function MyThemeProvider({ children }: MyThemeProviderProps) {
  const myDefault: { [index: string]: any } = {
    theme: createTheme({
      palette: {
        mode: 'light',
      },
    }),
  };
  return <ThemeProvider theme={myDefault.theme}>{children}</ThemeProvider>;
}

const renderWithMyTheme = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: MyThemeProvider, ...options });

export * from '@testing-library/react';
export { renderWithMyTheme };
