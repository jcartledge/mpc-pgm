import { BankName } from './types';

export type SetFileAction = {
  type: 'setFile';
  bankName: BankName;
  padNum: number;
  file: File;
  audioBuffer: AudioBuffer;
};

export type ClearFileAction = {
  type: 'clearFile';
  bankName: BankName;
  padNum: number;
};

export type SetSelectedBankNameAction = {
  type: 'setSelectedBankName';
  bankName: BankName;
};

export type AppAction =
  | SetFileAction
  | ClearFileAction
  | SetSelectedBankNameAction;
