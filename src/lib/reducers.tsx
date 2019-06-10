import { produce } from 'immer';
import { AppState, BankName } from '../lib/types';

export type ReducerSetFileAction = {
  type: 'setFile';
  bankName: BankName;
  padNum: number;
  file: File;
  audioBuffer: AudioBuffer;
};

export type ReducerAction = ReducerSetFileAction;

export const reducer = (state: AppState, { type, ...action }: ReducerAction) =>
  produce(state, (draft: AppState) => {
    switch (type) {
      case 'setFile':
        const { bankName, padNum, file, audioBuffer } = action;
        const pad = draft.banks[bankName][padNum];
        pad.file = file;
        pad.audioBuffer = audioBuffer;
        break;

      default:
        throw new Error(`Action type not supported: ${type}`);
    }
  });
