import React from 'react';
import { shallow } from 'enzyme';
import { setupContext } from '../lib/testSupport';
import BankSelectButtons, {
  BankSelectButton,
  BankSelectButtonsProps,
} from './BankSelectButtons';

describe('BankSelectButtons', () => {
  const setupProps = (
    overrides: Partial<BankSelectButtonsProps> = {},
  ): BankSelectButtonsProps => ({
    useContext: jest.fn().mockReturnValue(setupContext()),
    ...overrides,
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

  it('should dispatch setSelectedBank with the bank name when the buttons are clicked', () => {
    const context = setupContext();
    const props = setupProps({
      useContext: jest.fn().mockReturnValue(context),
    });
    const root = shallow(<BankSelectButtons {...props} />);
    ['A', 'B', 'C', 'D'].forEach((bankName, i) => {
      root
        .find(BankSelectButton)
        .at(i)
        .simulate('click');
      expect(context.dispatch).toHaveBeenCalledWith({
        type: 'setSelectedBankName',
        bankName,
      });
    });
  });
});
