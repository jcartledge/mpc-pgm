import React, { useReducer } from 'react';
import Pad from './Pad';
import PadDropZone from './PadDropZone';
import { BankName } from '../lib/types';
import { reducer, ReducerAction } from '../lib/reducers';
import { getAudioBuffer } from '../lib/actions';
import { initialState } from '../lib/initialState';

import { Grid, Cell } from 'styled-css-grid';

type Props = { bankName: BankName };

const setFileCb = (
  bankName: BankName,
  padNum: number,
  dispatch: React.Dispatch<ReducerAction>
) => (file: File) => {
  getAudioBuffer(file, audioBuffer =>
    dispatch({ type: 'setFile', bankName, padNum, file, audioBuffer })
  );
};

const Banks: React.FC<Props> = ({ bankName }) => {
  const [banks, dispatch] = useReducer(reducer, initialState);
  return (
    <Grid columns="100px 100px 100px 100px">
      {banks[bankName].map(({ file, audioBuffer }, padNum) => (
        <Cell
          key={`${bankName}:${padNum}`}
          top={4 - Math.floor(padNum / 4)}
          left={(padNum + 1) % 4}
        >
          {padNum + 1}
          <Pad onClick={undefined}>{file ? file.name : ''}</Pad>
          <PadDropZone setFile={setFileCb(bankName, padNum, dispatch)} />
        </Cell>
      ))}
    </Grid>
  );
};

export default Banks;
