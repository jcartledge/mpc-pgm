import React, { useState } from 'react';
import Banks from './Banks';
import BankSelectButtons from './BankSelectButtons';
import { BankName } from '../lib/types';

const App: React.FC = () => {
  const [bankName, setSelectedBankName] = useState<BankName>('A');
  return (
    <div className="App">
      <BankSelectButtons
        selectedBankName={bankName}
        setSelectedBankName={setSelectedBankName}
      />
      <Banks bankName={bankName} />
    </div>
  );
};

export default App;
