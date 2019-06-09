export type BankName = 'A' | 'B' | 'C' | 'D';
export type PadValue = { file?: File; audioBuffer?: ArrayBuffer };
export type Bank = PadValue[];
export type BankList = { [K in BankName]: Bank };
