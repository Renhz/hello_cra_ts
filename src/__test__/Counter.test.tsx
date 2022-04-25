import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import Counter from '~/components/Counter';

describe('+1按鈕', () => {
  test('onClick事件綁定setCount', () => {
    const mockFn = jest.fn();
    render(<Counter setCount={mockFn} />);
    const buttonAddOne = screen.getByRole('button', { exact: false, name: /\b(count|\+1)/ });
    fireEvent.click(buttonAddOne);
    expect(mockFn.mock.calls.length).toBe(1);
  });
  test('點擊+1按鈕, setCount收到的函式正確', () => {
    const mockFn = jest.fn();
    render(<Counter setCount={mockFn} />);
    const buttonAddOne = screen.getByRole('button', { exact: false, name: /\b(count|\+1)/ });
    fireEvent.click(buttonAddOne);
    expect(mockFn.mock.calls[0][0](0)).toBe(1);
  });
});

describe('reset按鈕', () => {
  test('onClick事件綁定setCount', () => {
    const mockFn = jest.fn();
    render(<Counter setCount={mockFn} />);
    const buttonReset = screen.getByRole('button', { exact: false, name: /\b(count|\+1)/ });
    fireEvent.click(buttonReset);
    expect(mockFn.mock.calls.length).toBe(1);
  });
  test('點擊reset按鈕, 無initialCount值, setCount收到0', () => {
    const mockFn = jest.fn();
    render(<Counter setCount={mockFn} />);
    const buttonReset = screen.getByRole('button', { exact: false, name: /\b(reset|\+1)/ });
    fireEvent.click(buttonReset);
    expect(mockFn.mock.calls[0][0]).toBe(0);
  });
  test('點擊reset按鈕, 有initialCount值, setCount收到initialCount', () => {
    const mockFn = jest.fn();
    render(<Counter setCount={mockFn} initialCount={10} />);
    const buttonReset = screen.getByRole('button', { exact: false, name: /\b(reset|\+1)/ });
    fireEvent.click(buttonReset);
    expect(mockFn.mock.calls[0][0]).toBe(10);
  });
});
