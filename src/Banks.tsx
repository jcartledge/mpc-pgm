import React, { useReducer } from 'react';
import Pad from './Pad';
import { produce } from 'immer';
import { Grid, Cell } from 'styled-css-grid';
import { BankName } from './App';

type Props = { selectedBankName: BankName };

type PadValue = boolean;
type Bank = PadValue[];
type BankList = { [K in BankName]: Bank };

type ReducerAction = { type: 'toggle'; bank: BankName; pad: number };

const reducer = (state: BankList, { type, bank, pad }: ReducerAction) =>
  produce(state, draft => {
    switch (type) {
      case 'toggle':
        draft[bank][pad] = !state[bank][pad];
        break;
      default:
        throw new Error(`Action type not supported: ${type}`);
    }
  });

const initialState: BankList = {
  A: Array(16).fill(false),
  B: Array(16).fill(false),
  C: Array(16).fill(false),
  D: Array(16).fill(false)
};

const Banks: React.FC<Props> = ({ selectedBankName }) => {
  const [banks, dispatch] = useReducer(reducer, initialState);
  return (
    <Grid columns="100px 100px 100px 100px">
      {banks[selectedBankName].map((isOn, padNum) => (
        <Cell
          key={`${selectedBankName}:${padNum}`}
          top={4 - Math.floor(padNum / 4)}
          left={(padNum + 1) % 4}
        >
          <Pad
            onClick={() =>
              dispatch({ type: 'toggle', bank: selectedBankName, pad: padNum })
            }
            isOn={isOn}
          >
            {padNum + 1}
          </Pad>
        </Cell>
      ))}
    </Grid>
  );
};

export default Banks;
