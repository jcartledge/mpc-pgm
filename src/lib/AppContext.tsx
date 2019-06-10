import { createContext } from 'react';
import { ReducerAction } from './reducers';
import { AppState } from './types';

type AppContextValue = {
  dispatch: React.Dispatch<ReducerAction> | null;
  state: AppState;
};

const AppContext = createContext<AppContextValue>({
  dispatch: null,
  state: {
    banks: { A: [], B: [], C: [], D: [] }
  }
});
export default AppContext;
