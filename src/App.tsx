import React, {useState} from 'react';
import Banks from './Banks';
import BankSelectButtons from './BankSelectButtons';

const App: React.FC = () => {
  const [selectedBank, setSelectedBank] = useState(1);
  return (
    <div className="App">
      <BankSelectButtons setSelectedBank={setSelectedBank} />
      <Banks selectedBank={selectedBank} />
    </div>
  );
};

export default App;
