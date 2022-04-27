import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

it('app成功渲染', () => {
  render(<App />);
  expect(screen.getByText('測試專案')).toBeInTheDocument();
});
