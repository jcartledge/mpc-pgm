import React, { useState } from 'react';
import Banks from './Banks';
import BankSelectButtons from './BankSelectButtons';

const App: React.FC = () => {
  const [selectedBank, setSelectedBank] = useState(0);
  return (
    <div className="App">
      <BankSelectButtons
        selectedBankNum={selectedBank}
        setSelectedBankNum={setSelectedBank}
      />
      <Banks selectedBankNum={selectedBank} />
    </div>
  );
};

export default App;
