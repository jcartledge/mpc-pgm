import React, {useContext} from 'react';
import {Cell, Grid} from 'styled-css-grid';
import AppContext from '../lib/AppContext';
import {BankName, PadValue} from '../lib/types';
import Pad from './Pad';

type BanksProps = { bankName: BankName };

const Banks: React.FC<BanksProps> = ({ bankName }) => {
  const {state} = useContext(AppContext);
  const {banks} = state;
  return (
      <Grid columns="100px 100px 100px 100px">
        {banks[bankName].map((padProps: PadValue, padNum: number) => (
          <Cell
            key={`${bankName}:${padNum}`}
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
