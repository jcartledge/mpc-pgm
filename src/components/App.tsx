import React, { useReducer } from 'react';
import AppContext from '../lib/AppContext';
import { initialState as importedInitialState } from '../lib/initialState';
import { reducer } from '../lib/reducers';
import { AppState } from '../lib/types';
import Banks from './Banks';
import BankSelectButtons from './BankSelectButtons';

type AppProps = { initialState?: AppState };

const App: React.FC<AppProps> = ({ initialState = importedInitialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BankSelectButtons />
      <Banks />
    </AppContext.Provider>
  );
};

export default App;
