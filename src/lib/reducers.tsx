import { produce } from 'immer';
import { AppState, BankName } from '../lib/types';
import { clearFile, setFile, setSelectedBankName } from './actions';

export type ReducerSetFileAction = {
  type: 'setFile';
  bankName: BankName;
  padNum: number;
  file: File;
  audioBuffer: AudioBuffer;
};

export type ReducerClearFileAction = {
  type: 'clearFile';
  bankName: BankName;
  padNum: number;
};

export type ReducerSetSelectedBankNameAction = {
  type: 'setSelectedBankName';
  bankName: BankName;
};

export type ReducerAction =
  | ReducerSetFileAction
  | ReducerClearFileAction
  | ReducerSetSelectedBankNameAction;

export const reducer = (state: AppState, { type, ...action }: ReducerAction) =>
  produce(state, (draft: AppState) => {
    switch (type) {
      case 'setFile':
        setFile(action as ReducerSetFileAction, draft);
        break;

      case 'clearFile':
        clearFile(action as ReducerClearFileAction, draft);
        break;

      case 'setSelectedBankName':
        setSelectedBankName(action as ReducerSetSelectedBankNameAction, draft);
        break;

      default:
        throw new Error(`Action type not supported: ${type}`);
    }
  });
