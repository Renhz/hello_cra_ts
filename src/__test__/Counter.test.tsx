import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import Counter from '~/components/Counter';

describe('+1按鈕', () => {
  test('點選按鈕，setCount被呼叫', () => {
    const mockSetCount = jest.fn();
    render(<Counter setCount={mockSetCount} />);
    fireEvent.click(screen.getByRole('button', { exact: false, name: /\b(count|\+1)/ }));
    const { calls } = mockSetCount.mock;
    expect(calls.length).toBe(1);
  });
  test('setCount收到的參數為函式, 其邏輯正確 0=>0+1', () => {
    const mockSetCount = jest.fn();
    render(<Counter setCount={mockSetCount} />);
    fireEvent.click(screen.getByRole('button', { exact: false, name: /\b(count|\+1)/ }));
    const { calls } = mockSetCount.mock;
    expect(calls[0][0](0)).toBe(1);
  });
});

describe('reset按鈕', () => {
  test('點選按鈕，setCount被呼叫', () => {
    const mockSetCount = jest.fn();
    render(<Counter setCount={mockSetCount} />);
    fireEvent.click(screen.getByRole('button', { exact: false, name: /\b(reset|\+1)/ }));
    const { calls } = mockSetCount.mock;
    expect(calls.length).toBe(1);
  });
  test('setCount收到的參數為0, 重置為0', () => {
    const mockSetCount = jest.fn();
    render(<Counter setCount={mockSetCount} />);
    fireEvent.click(screen.getByRole('button', { exact: false, name: /\b(reset|\+1)/ }));
    const { calls } = mockSetCount.mock;
    expect(calls[0][0]).toBe(0);
  });
  test('如有設定initialCount值10, 則重置為10', () => {
    const mockSetCount = jest.fn();
    render(<Counter setCount={mockSetCount} initialCount={10} />);
    fireEvent.click(screen.getByRole('button', { exact: false, name: /\b(reset|\+1)/ }));
    const { calls } = mockSetCount.mock;
    expect(calls[0][0]).toBe(10);
  });
});
