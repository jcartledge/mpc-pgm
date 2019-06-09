import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import {BankName} from '../lib/types';

export type BankSelectButtonsProps = {
  selectedBankName: BankName;
  setSelectedBankName: Dispatch<SetStateAction<BankName>>;
};

export const BankSelectButton = styled.button`
  width: 50px;
  height: 20px;
  &.active {
    color: red;
  }
`;

const BankSelectButtons: React.FC<BankSelectButtonsProps> = ({
  selectedBankName,
  setSelectedBankName
}) => {
  return (
    <>
      {['A', 'B', 'C', 'D'].map(bankName => {
        return (
          <BankSelectButton
            key={bankName}
            onClick={() => setSelectedBankName(bankName as BankName)}
            className={bankName === selectedBankName ? 'active' : undefined}
          >
            {bankName}
          </BankSelectButton>
        );
      })}
    </>
  );
};

export default BankSelectButtons;
