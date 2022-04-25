import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import Counter from '~/components/Counter';

describe('點選按鈕', () => {
  test('點選+1按鈕', () => {
    const mockFn = jest.fn();
    render(<Counter setCount={mockFn} />);
    // const buttonAddOne = screen.getByText('+1', { exact: false });
    const buttonAddOne = screen.getByRole('button', { exact: false, name: /\b(count|\+1)/ });
    fireEvent.click(buttonAddOne);
    expect(mockFn.mock.calls.length).toBe(1);
  });
});
