import React from 'react';
import { shallow } from 'enzyme';
import BankSelectButtons, { BankSelectButton, BankSelectButtonsProps } from './BankSelectButtons';

describe('BankSelectButtons', () => {
  const setupProps = (
    overrides: Partial<BankSelectButtonsProps> = {}
  ): BankSelectButtonsProps => ({
    setSelectedBankName: jest.fn(),
    selectedBankName: 'A',
    ...overrides
  });
  it('should render without crashing', () => {
    const props = setupProps();
    expect(() => shallow(<BankSelectButtons {...props} />)).not.toThrow();
  });

  it('should render four buttons', () => {
    const props = setupProps();
    const root = shallow(<BankSelectButtons {...props} />);
    expect(root.find(BankSelectButton).length).toBe(4);
  });

  it('should call setSelectedBank with the button number when the buttons are clicked', () => {
    const props = setupProps();
    const root = shallow(
      <BankSelectButtons {...props} />
    );
    ['A', 'B', 'C', 'D'].forEach((bankName, i) => {
      root
        .find(BankSelectButton)
        .at(i)
        .simulate('click');
      expect(props.setSelectedBankName).toHaveBeenCalledWith(bankName);
    });
  });
});
