import { render } from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import { store } from '~/features/store';
import SwitchColorMode from '~/features/theme/SwitchColorMode';

import { screen, fireEvent } from './myTestUtils';

describe('<SwitchColorMode/> 渲染於redux環境', () => {
  render(
    <Provider store={store}>
      <SwitchColorMode />
    </Provider>
  );
  const mySwitch = screen.getByRole('checkbox');
  test('theme.colorMode預設為light，點選switch後切換為dark', () => {
    fireEvent.click(mySwitch);
    expect(store.getState().theme.colorMode).toBe('dark');
  });
});
