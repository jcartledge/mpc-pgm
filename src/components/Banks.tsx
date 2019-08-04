import React, { useContext as importedUseContext } from 'react';
import { Cell, Grid } from 'styled-css-grid';
import AppContext, { AppContextValue } from '../lib/AppContext';
import { PadValue } from '../lib/types';
import Pad from './Pad';

export interface BanksProps {
  useContext?: (context: React.Context<AppContextValue>) => AppContextValue;
}

const Banks: React.FC<BanksProps> = ({ useContext = importedUseContext }) => {
  const { state } = useContext(AppContext);
  const { banks, selectedBankName } = state;
  return (
    <Grid columns="100px 100px 100px 100px">
      {banks[selectedBankName].map((padProps: PadValue, padNum: number) => (
        <Cell
          key={`${selectedBankName}:${padNum}`}
          top={4 - Math.floor(padNum / 4)}
          left={(padNum + 1) % 4}
        >
          <Pad {...padProps} />
        </Cell>
      ))}
    </Grid>
  );
};

export default Banks;
