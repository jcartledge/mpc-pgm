import React from 'react';
import { shallow } from 'enzyme';
import BankSelectButtons, { BankSelectButtonsProps } from './BankSelectButtons';

describe('BankSelectButtons', () => {
  const setupProps = (
    overrides: Partial<BankSelectButtonsProps> = {}
  ): BankSelectButtonsProps => ({
    setSelectedBankNum: jest.fn(),
    selectedBankNum: 0,
    ...overrides
  });
  it('should render without crashing', () => {
    const props = setupProps();
    expect(() => shallow(<BankSelectButtons {...props} />)).not.toThrow();
  });

  it('should render four buttons', () => {
    const props = setupProps();
    const root = shallow(<BankSelectButtons {...props} />);
    expect(root.find('button').length).toBe(4);
  });

  it('should call setSelectedBank with the button number when the buttons are clicked', () => {
    const props = setupProps();
    const root = shallow(
      <BankSelectButtons {...props} />
    );
    [0, 1, 2, 3].forEach(i => {
      root
        .find('button')
        .at(i)
        .simulate('click');
      expect(props.setSelectedBankNum).toHaveBeenCalledWith(i);
    });
  });
});
