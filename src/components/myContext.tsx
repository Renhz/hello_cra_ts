import * as React from 'react';

interface ContextState {
  [index: string]: any;
}
const DashboardContext = React.createContext({} as ContextState);

export default DashboardContext;
