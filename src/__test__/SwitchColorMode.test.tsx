import { render } from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import { store } from '~/features/store';
import SwitchColorMode from '~/features/theme/SwitchColorMode';

import { screen, fireEvent } from '@testing-library/react';

describe('<SwitchColorMode/> 渲染於redux環境', () => {
  test('theme.colorMode預設為light，點選switch後切換為dark', () => {
    render(
      <Provider store={store}>
        <SwitchColorMode />
      </Provider>
    );
    const mySwitch = screen.getByRole('checkbox');
    fireEvent.click(mySwitch);
    expect(store.getState().theme.colorMode).toBe('dark');
  });
  test('切換亮暗色時將設定存入localStorage的colorMode', () => {
    const spy = jest.spyOn(Object.getPrototypeOf(localStorage), 'setItem');
    render(
      <Provider store={store}>
        <SwitchColorMode />
      </Provider>
    );
    const mySwitch = screen.getByRole('checkbox');
    fireEvent.click(mySwitch);
    expect(spy.mock.calls[0]?.[0]).toBe('colorMode');
    expect(spy.mock.calls[0]?.[1]).toBe('dark');
  });
});
