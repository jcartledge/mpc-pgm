import { getAudioBuffer, playAudioBuffer } from './actions';
import { ReducerClearFileAction, ReducerSetFileAction } from './reducers';
import { AppState, BankName, PadValue } from './types';

const setFileFn = (padNum: number, bankName: BankName) => (
  file: File,
  dispatch: React.Dispatch<ReducerSetFileAction> | null,
) => {
  getAudioBuffer(file, audioBuffer => {
    dispatch &&
      dispatch({ type: 'setFile', bankName, padNum, file, audioBuffer });
    playAudioBuffer(audioBuffer);
  });
};

const clearFileFn = (padNum: number, bankName: BankName) => (
  dispatch: React.Dispatch<ReducerClearFileAction> | null,
) => dispatch && dispatch({ type: 'clearFile', bankName, padNum });

const emptyBank = (bankName: BankName, size: number = 16): PadValue[] =>
  Array(size)
    .fill(0)
    .map((_, padNum) => ({
      setFile: setFileFn(padNum, bankName),
      clearFile: clearFileFn(padNum, bankName),
    }));

export const initialState: AppState = {
  selectedBankName: 'A',
  banks: {
    A: emptyBank('A'),
    B: emptyBank('B'),
    C: emptyBank('C'),
    D: emptyBank('D'),
  },
};
