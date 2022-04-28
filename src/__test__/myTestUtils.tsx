import { render, RenderOptions } from '@testing-library/react';
import * as React from 'react';

import DashboardContext from '../components/myContext';

interface TestProviderProps {
  children: React.ReactNode;
  contextValue: {
    [index: string]: any;
  };
}

function TestProvider({ children, contextValue }: TestProviderProps) {
  return <DashboardContext.Provider value={contextValue}>{children}</DashboardContext.Provider>;
}

interface CustomRenderOptions extends RenderOptions {
  providerProps: Pick<TestProviderProps, 'contextValue'>;
}

const renderWithMyProviders = (
  ui: React.ReactElement,
  { providerProps, ...renderOptions }: CustomRenderOptions
) =>
  render(
    <TestProvider contextValue={providerProps.contextValue}>{ui}</TestProvider>,
    renderOptions
  );

export * from '@testing-library/react';
export { renderWithMyProviders };
