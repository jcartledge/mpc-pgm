import { produce } from 'immer';
import {
  AppAction,
  ClearFileAction,
  SetFileAction,
  SetSelectedBankNameAction,
} from './actions';
import { AppState } from './types';

const setFile = (
  { bankName, padNum, file, audioBuffer }: SetFileAction,
  draft: AppState,
) => {
  const pad = draft.banks[bankName][padNum];
  pad.file = file;
  pad.audioBuffer = audioBuffer;
};

const clearFile = ({ bankName, padNum }: ClearFileAction, draft: AppState) => {
  const pad = draft.banks[bankName][padNum];
  delete pad.file;
  delete pad.audioBuffer;
};

const setSelectedBankName = (
  { bankName }: SetSelectedBankNameAction,
  draft: AppState,
) => {
  draft.selectedBankName = bankName;
};

export const reducer = (state: AppState, { type, ...action }: AppAction) =>
  produce(state, (draft: AppState) => {
    switch (type) {
      case 'setFile':
        setFile(action as SetFileAction, draft);
        break;

      case 'clearFile':
        clearFile(action as ClearFileAction, draft);
        break;

      case 'setSelectedBankName':
        setSelectedBankName(action as SetSelectedBankNameAction, draft);
        break;

      default:
        throw new Error(`Action type not supported: ${type}`);
    }
  });
