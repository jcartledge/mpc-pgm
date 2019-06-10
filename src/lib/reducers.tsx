import { BankName, BankList } from '../lib/types';
import { produce } from 'immer';

export type ReducerSetFileAction = {
  type: 'setFile';
  bankName: BankName;
  padNum: number;
  file: File;
  audioBuffer: AudioBuffer;
};

export type ReducerAction = ReducerSetFileAction;

export const reducer = (
  state: BankList,
  { type, ...action }: ReducerAction
) =>
  produce(state, draft => {
    switch (type) {
      case 'setFile':
        const { bankName, padNum, file, audioBuffer } = action;
        const pad = draft[bankName][padNum];
        pad.file = file;
        pad.audioBuffer = audioBuffer;
        break;

      default:
        throw new Error(`Action type not supported: ${type}`);
    }
  });
