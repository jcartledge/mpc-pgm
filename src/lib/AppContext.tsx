import { createContext } from 'react';
import { ReducerAction } from './reducers';
import { AppState } from './types';

export type AppContextValue = {
  dispatch: React.Dispatch<ReducerAction> | null;
  state: AppState;
};

export const emptyState: AppState = {
  selectedBankName: 'A',
  banks: { A: [], B: [], C: [], D: [] },
};

const AppContext = createContext<AppContextValue>({
  dispatch: null,
  state: emptyState,
});

export default AppContext;
