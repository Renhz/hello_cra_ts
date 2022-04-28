import * as React from 'react';

interface ContextState {
  [index: string]: any;
}
export const DashboardContext = React.createContext({} as ContextState);
export const RoutesContext = React.createContext({} as ContextState);
