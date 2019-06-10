import React, { useReducer } from 'react';
import Pad from './Pad';
import PadDropZone from './PadDropZone';
import { BankName, BankList } from '../lib/types';
import { reducer, ReducerAction } from '../lib/reducers';
import { getAudioBuffer, playAudioBuffer } from '../lib/actions';
import { initialState as importedInitialState } from '../lib/initialState';

import { Grid, Cell } from 'styled-css-grid';

type Props = { bankName: BankName; initialState?: BankList };

const setFileCb = (
  bankName: BankName,
  padNum: number,
  dispatch: React.Dispatch<ReducerAction>
) => (file: File) => {
  getAudioBuffer(file, audioBuffer =>
    dispatch({ type: 'setFile', bankName, padNum, file, audioBuffer })
  );
};

const Banks: React.FC<Props> = ({
  bankName,
  initialState = importedInitialState
}) => {
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
          <Pad
            onClick={
              audioBuffer ? () => playAudioBuffer(audioBuffer) : undefined
            }
          >
            {file ? file.name : ''}
          </Pad>
          <PadDropZone setFile={setFileCb(bankName, padNum, dispatch)} />
        </Cell>
      ))}
    </Grid>
  );
};

export default Banks;
