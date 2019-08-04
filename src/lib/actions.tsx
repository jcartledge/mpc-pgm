import { BankName } from './types';

export interface SetFileAction {
  type: 'setFile';
  bankName: BankName;
  padNum: number;
  file: File;
  audioBuffer: AudioBuffer;
}

export interface ClearFileAction {
  type: 'clearFile';
  bankName: BankName;
  padNum: number;
}

export interface SetSelectedBankNameAction {
  type: 'setSelectedBankName';
  bankName: BankName;
}

export type AppAction =
  | SetFileAction
  | ClearFileAction
  | SetSelectedBankNameAction;
