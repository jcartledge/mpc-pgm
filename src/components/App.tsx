import React, { useReducer, useState } from 'react';
import AppContext from '../lib/AppContext';
import { initialState as importedInitialState } from '../lib/initialState';
import { reducer } from '../lib/reducers';
import { AppState, BankName } from '../lib/types';
import Banks from './Banks';
import BankSelectButtons from './BankSelectButtons';

type AppProps = { initialState?: AppState };
const App: React.FC<AppProps> = ({ initialState = importedInitialState }) => {
  const [bankName, setSelectedBankName] = useState<BankName>('A');
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BankSelectButtons
        selectedBankName={bankName}
        setSelectedBankName={setSelectedBankName}
      />
      <Banks bankName={bankName} />
    </AppContext.Provider>
  );
};

export default App;
