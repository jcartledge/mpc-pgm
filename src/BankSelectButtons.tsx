import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

export type BankSelectButtonsProps = {
  selectedBankNum: number;
  setSelectedBankNum: Dispatch<SetStateAction<number>>;
};

export const BankSelectButton = styled.button`
  width: 50px;
  height: 20px;
  &.active {
    color: red;
  }
`;

const BankSelectButtons: React.FC<BankSelectButtonsProps> = ({
  selectedBankNum,
  setSelectedBankNum
}) => {
  return (
    <>
      {[0, 1, 2, 3].map(bankNum => {
        return (
          <BankSelectButton
            key={bankNum}
            onClick={() => setSelectedBankNum(bankNum)}
            className={selectedBankNum === bankNum ? 'active' : undefined}
          >
            {bankNum + 1}
          </BankSelectButton>
        );
      })}
    </>
  );
};

export default BankSelectButtons;
