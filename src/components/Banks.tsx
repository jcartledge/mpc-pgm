import React, { useReducer } from 'react';
import Pad from './Pad';
import { BankName, BankList } from '../lib/types';
import { reducer } from '../lib/reducers';
import AppContext from '../lib/AppContext';
import { initialState as importedInitialState } from '../lib/initialState';

import { Grid, Cell } from 'styled-css-grid';

type Props = { bankName: BankName; initialState?: BankList };

const Banks: React.FC<Props> = ({
  bankName,
  initialState = importedInitialState
}) => {
  const [banks, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ dispatch }}>
      <Grid columns="100px 100px 100px 100px">
        {banks[bankName].map((padProps, padNum) => (
          <Cell
            key={`${bankName}:${padNum}`}
            top={4 - Math.floor(padNum / 4)}
            left={(padNum + 1) % 4}
          >
            {padNum + 1}
            <Pad {...padProps} />
          </Cell>
        ))}
      </Grid>
    </AppContext.Provider>
  );
};

export default Banks;
