import * as React from 'react';

import '@testing-library/jest-dom';

// import { SwitchDayNight } from '~/components/myStyled';
import SwitchDayNight from '~/components/myGeneralUI';

import { renderWithMyProviders, screen, fireEvent } from './myTestUtils';

describe('使用於DashboardContext環境, 從useContext取得setTheme函式', () => {
  const mockSetTheme = jest.fn();
  const providerProps = {
    contextValue: {
      setTheme: mockSetTheme,
    },
  };
  renderWithMyProviders(<SwitchDayNight />, { providerProps });
  const mySwitch = screen.getByRole('checkbox');
  fireEvent.click(mySwitch);
  screen.debug(mySwitch);
  test('點選switch成功呼叫setTheme', () => {
    expect(mockSetTheme.mock.calls.length).toBe(1);
  });
  test('setTheme收到的update函式邏輯正確', () => {
    const themeInit = {
      palette: { mode: 'light' },
    };
    const toggle = mockSetTheme.mock.calls[0][0];
    const themeChanged = toggle(themeInit);
    const themeChangedBack = toggle(themeChanged);
    expect(themeChanged.palette.mode).toBe('dark');
    expect(themeChangedBack.palette.mode).toBe('light');
  });
});
