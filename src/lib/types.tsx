import { SetFileAction, ClearFileAction } from './actions';

export type BankName = 'A' | 'B' | 'C' | 'D';

export interface PadValue {
  file?: File;
  audioBuffer?: AudioBuffer;
  setFile: (file: File, dispatch: React.Dispatch<SetFileAction> | null) => void;
  clearFile: (dispatch: React.Dispatch<ClearFileAction> | null) => void;
}

export type Bank = PadValue[];

export type BankList = { [K in BankName]: Bank };

export interface AppState {
  selectedBankName: BankName;
  banks: BankList;
}
