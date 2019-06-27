import { reducer } from './reducers';
import {
  SetFileAction,
  ClearFileAction,
  SetSelectedBankNameAction,
} from './actions';
import { AppState, BankList, PadValue } from './types';

describe('reducers', () => {
  const buildPad = (overrides: Partial<PadValue> = {}): PadValue => ({
    setFile: jest.fn(),
    clearFile: jest.fn(),
    ...overrides,
  });

  const buildBanks = (overrides: Partial<BankList> = {}): BankList => ({
    A: [],
    B: [],
    C: [],
    D: [],
    ...overrides,
  });

  const buildState = (overrides: Partial<AppState> = {}): AppState => ({
    selectedBankName: 'A',
    banks: buildBanks(),
    ...overrides,
  });

  describe('setFile', () => {
    const buildSetFileAction = (
      overrides: Partial<Omit<SetFileAction, 'type'>> = {},
    ): SetFileAction => ({
      type: 'setFile',
      bankName: 'A',
      padNum: 0,
      file: new File([], ''),
      audioBuffer: {} as AudioBuffer,
      ...overrides,
    });

    it('should set the file', () => {
      const banks = buildBanks({ A: [buildPad()] });
      const state = buildState({ banks });
      const file = new File([], 'test');
      const bankName = 'A';
      const padNum = 0;
      const action = buildSetFileAction({ file, bankName, padNum });
      const newState = reducer(state, action);
      expect(newState.banks[bankName][padNum].file).toBe(file);
    });
  });

  describe('clearFile', () => {
    const buildClearFileAction = (
      overrides: Partial<Omit<ClearFileAction, 'type'>> = {},
    ): ClearFileAction => ({
      type: 'clearFile',
      bankName: 'A',
      padNum: 0,
      ...overrides,
    });

    it('should clear the file', () => {
      const file = new File([], 'test');
      const banks = buildBanks({ A: [buildPad({ file })] });
      const state = buildState({ banks });
      const bankName = 'A';
      const padNum = 0;
      const action = buildClearFileAction({ bankName, padNum });
      const newState = reducer(state, action);
      expect(newState.banks[bankName][padNum].file).toBeUndefined();
    });
  });

  describe('setSelectedBankName', () => {
    const buildSetSelectedBankNameAction = (
      overrides: Partial<Omit<SetSelectedBankNameAction, 'type'>> = {},
    ): SetSelectedBankNameAction => ({
      type: 'setSelectedBankName',
      bankName: 'A',
      ...overrides,
    });

    it('should set the selected bank name', () => {
      const selectedBankName = 'A';
      const state = buildState({ selectedBankName });
      const bankName = 'D';
      const action = buildSetSelectedBankNameAction({ bankName });
      const newState = reducer(state, action);
      expect(newState.selectedBankName).toEqual(bankName);
    });
  });
});
