import React, { useState } from 'react';
import Banks from './Banks';
import BankSelectButtons from './BankSelectButtons';

export type BankName = 'A'|'B'|'C'|'D';

const App: React.FC = () => {
  const [selectedBankName, setSelectedBankName] = useState<BankName>('A');
  return (
    <div className="App">
      <BankSelectButtons
        selectedBankName={selectedBankName}
        setSelectedBankName={setSelectedBankName}
      />
      <Banks selectedBankName={selectedBankName} />
    </div>
  );
};

export default App;
