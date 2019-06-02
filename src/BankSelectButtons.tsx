import React, { Dispatch, SetStateAction } from 'react';

export type BankSelectButtonsProps = {
  selectedBankNum: number;
  setSelectedBankNum: Dispatch<SetStateAction<number>>;
};

const BankSelectButtons: React.FC<BankSelectButtonsProps> = ({
  selectedBankNum,
  setSelectedBankNum
}) => {
  return (
    <>
      {[0, 1, 2, 3].map(bankNum => {
        return (
          <button
            key={bankNum}
            onClick={() => setSelectedBankNum(bankNum)}
            style={{
              backgroundColor: selectedBankNum == bankNum ? 'white' : 'silver'
            }}
          >
            {bankNum + 1}
          </button>
        );
      })}
    </>
  );
};

export default BankSelectButtons;
