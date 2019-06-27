import { ClearFileAction, SetFileAction } from './actions';
import getAudioBuffer from './getAudioBuffer';
import playAudioBuffer from './playAudioBuffer';
import { AppState, BankName, PadValue } from './types';

const setFileFn = (padNum: number, bankName: BankName) => (
  file: File,
  dispatch: React.Dispatch<SetFileAction> | null,
) => {
  getAudioBuffer(file, audioBuffer => {
    dispatch &&
      dispatch({ type: 'setFile', bankName, padNum, file, audioBuffer });
    playAudioBuffer(audioBuffer);
  });
};

const clearFileFn = (padNum: number, bankName: BankName) => (
  dispatch: React.Dispatch<ClearFileAction> | null,
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
