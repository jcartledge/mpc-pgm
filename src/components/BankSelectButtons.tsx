import React, { useContext as importedUseContext } from 'react';
import styled from 'styled-components';
import { BankName } from '../lib/types';
import AppContext, { AppContextValue } from '../lib/AppContext';

export interface BankSelectButtonsProps {
  useContext?: (context: React.Context<AppContextValue>) => AppContextValue;
}

export const BankSelectButton = styled.button`
  width: 50px;
  height: 20px;
  &.active {
    color: red;
  }
`;

const BankSelectButtons: React.FC<BankSelectButtonsProps> = ({
  useContext = importedUseContext,
}) => {
  const { state, dispatch } = useContext(AppContext);
  const { selectedBankName } = state;
  return (
    <>
      {(['A', 'B', 'C', 'D'] as BankName[]).map(bankName => {
        return (
          <BankSelectButton
            key={bankName}
            onClick={() =>
              dispatch && dispatch({ type: 'setSelectedBankName', bankName })
            }
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
