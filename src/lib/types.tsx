import { ReducerSetFileAction } from './reducers';

export type BankName = 'A' | 'B' | 'C' | 'D';
export type PadValue = {
  file?: File;
  audioBuffer?: AudioBuffer;
  setFile: (
    file: File,
    dispatch: React.Dispatch<ReducerSetFileAction> | null
  ) => void;
};
export type Bank = PadValue[];
export type BankList = { [K in BankName]: Bank };

export type AppState = {
  banks: BankList;
};
