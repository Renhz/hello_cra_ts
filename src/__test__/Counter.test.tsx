import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import Counter from '~/components/Counter';

describe('+1按鈕', () => {
  cleanup();
  const mockFn = jest.fn();
  render(<Counter setCount={mockFn} />);
  const btnAddOne = screen.getByRole('button', { exact: false, name: /\b(count|\+1)/ });
  fireEvent.click(btnAddOne);
  const { calls } = mockFn.mock;
  test('onClick事件綁定setCount', () => {
    expect(calls.length).toBe(1);
  });
  test('點擊+1按鈕, setCount收到的函式邏輯正確', () => {
    expect(calls[0][0](0)).toBe(1);
  });
});

describe('reset按鈕', () => {
  cleanup();
  const mockFn = jest.fn();
  render(<Counter setCount={mockFn} />);
  const btnReset = screen.getByRole('button', { exact: false, name: /\b(reset|\+1)/ });
  fireEvent.click(btnReset);
  const { calls } = mockFn.mock;
  test('onClick事件綁定setCount', () => {
    expect(calls.length).toBe(1);
  });
  test('點擊reset按鈕, setCount收到0', () => {
    expect(calls[0][0]).toBe(0);
  });
  test('如有initialCount值, setCount收到initialCount', () => {
    render(<Counter setCount={mockFn} initialCount={10} />);
    const btnResetWithInit = screen.getByRole('button', { exact: false, name: /\b(reset|\+1)/ });
    fireEvent.click(btnResetWithInit);
    const callsWithInit = mockFn.mock.calls;
    expect(callsWithInit[0][0]).toBe(10);
  });
});
