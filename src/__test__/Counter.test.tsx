import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import Counter from '~/components/Counter';

describe('+1按鈕', () => {
  cleanup();
  const mockSetCount = jest.fn();
  render(<Counter setCount={mockSetCount} />);
  const btnAddOne = screen.getByRole('button', { exact: false, name: /\b(count|\+1)/ });
  fireEvent.click(btnAddOne);
  const { calls } = mockSetCount.mock;
  test('setCount函式成功綁定於按鈕', () => {
    expect(calls.length).toBe(1);
  });
  test('setCount收到的update函式邏輯正確 0=>0+1', () => {
    expect(calls[0][0](0)).toBe(1);
  });
});

describe('reset按鈕', () => {
  cleanup();
  const mockSetCount = jest.fn();
  render(<Counter setCount={mockSetCount} />);
  const btnReset = screen.getByRole('button', { exact: false, name: /\b(reset|\+1)/ });
  fireEvent.click(btnReset);
  const { calls } = mockSetCount.mock;
  test('setCount函式成功綁定於按鈕', () => {
    expect(calls.length).toBe(1);
  });
  test('setCount收到的參數為0, 重置為0', () => {
    expect(calls[0][0]).toBe(0);
  });
  test('如有設定initialCount值為10, 重置為10', () => {
    render(<Counter setCount={mockSetCount} initialCount={10} />);
    const btnResetWithInit = screen.getByRole('button', { exact: false, name: /\b(reset|\+1)/ });
    fireEvent.click(btnResetWithInit);
    const callsWithInit = mockSetCount.mock.calls;
    expect(callsWithInit[0][0]).toBe(10);
  });
});
