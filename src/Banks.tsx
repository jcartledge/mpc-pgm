import React, { useReducer } from 'react';
import Pad from './Pad';
import { produce } from 'immer';
import { Grid, Cell } from 'styled-css-grid';

type Props = { selectedBankNum: number };

type PadValue = boolean;
type Bank = PadValue[];
type BankList = Bank[];

type ReducerAction = { type: 'toggle'; bank: number; pad: number };

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

const initialState = Array(4)
  .fill(0)
  .map(_ => Array(16).fill(false));

const Banks: React.FC<Props> = ({ selectedBankNum }) => {
  const [banks, dispatch] = useReducer(reducer, initialState);
  return (
    <Grid columns="100px 100px 100px 100px">
      {banks[selectedBankNum].map((isOn, padNum) => (
        <Cell
          key={`${selectedBankNum}:${padNum}`}
          top={4 - Math.floor(padNum / 4)}
          left={(padNum + 1) % 4}
        >
          <Pad
            onClick={() =>
              dispatch({ type: 'toggle', bank: selectedBankNum, pad: padNum })
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
