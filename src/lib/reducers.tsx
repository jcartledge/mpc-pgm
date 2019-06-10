import { produce } from 'immer';
import { AppState, BankName } from '../lib/types';
import { clearFile, setFile } from './actions';

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

export type ReducerAction = ReducerSetFileAction | ReducerClearFileAction;

export const reducer = (state: AppState, { type, ...action }: ReducerAction) =>
  produce(state, (draft: AppState) => {
    switch (type) {
      case 'setFile':
        setFile(action as ReducerSetFileAction, draft);
        break;

      case 'clearFile':
        clearFile(action as ReducerClearFileAction, draft);
        break;

      default:
        throw new Error(`Action type not supported: ${type}`);
    }
  });
