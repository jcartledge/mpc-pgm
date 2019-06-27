import { createContext } from 'react';
import { AppAction } from './actions';
import { AppState } from './types';

export type AppContextValue = {
  dispatch: React.Dispatch<AppAction> | null;
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
