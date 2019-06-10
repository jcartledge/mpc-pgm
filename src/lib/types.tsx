import { ReducerSetFileAction, ReducerClearFileAction } from './reducers';

export type BankName = 'A' | 'B' | 'C' | 'D';

export type PadValue = {
  file?: File;
  audioBuffer?: AudioBuffer;
  setFile: (
    file: File,
    dispatch: React.Dispatch<ReducerSetFileAction> | null
  ) => void;
  clearFile: (
    dispatch: React.Dispatch<ReducerClearFileAction> | null
  ) => void;
};

export type Bank = PadValue[];

export type BankList = { [K in BankName]: Bank };

export type AppState = {
  selectedBankName: BankName;
  banks: BankList;
};
