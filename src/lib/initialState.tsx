import { BankList, PadValue } from './types';

const emptyBank = (size: number = 16): PadValue[] =>
  Array(size).fill({});

export const initialState: BankList = {
  A: emptyBank(),
  B: emptyBank(),
  C: emptyBank(),
  D: emptyBank()
};
