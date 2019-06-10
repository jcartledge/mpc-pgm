import { AppState, PadValue, BankName } from './types';
import { ReducerSetFileAction } from './reducers';
import { getAudioBuffer } from './actions';

const emptyBank = (bankName: BankName, size: number = 16): PadValue[] =>
  Array(size)
    .fill(0)
    .map((_, padNum) => ({
      setFile: (
        file: File,
        dispatch: React.Dispatch<ReducerSetFileAction> | null
      ) =>
        getAudioBuffer(
          file,
          audioBuffer =>
            dispatch &&
            dispatch({ type: 'setFile', bankName, padNum, file, audioBuffer })
        )
    }));

export const initialState: AppState = {
  banks: {
    A: emptyBank('A'),
    B: emptyBank('B'),
    C: emptyBank('C'),
    D: emptyBank('D')
  }
};
