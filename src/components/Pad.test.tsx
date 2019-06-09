import React from 'react';
import { shallow } from 'enzyme';
import Pad, { PadProps, PadButton } from './Pad';

describe('Pad', () => {
  const setupProps = (overrides: Partial<PadProps> = {}): PadProps => ({
    onClick: jest.fn(),
    ...overrides
  });

  it('should render', () => {
    const props = setupProps();
    expect(() => shallow(<Pad {...props} />)).not.toThrow();
  });

  it('should call onClick when clicked', () => {
    const props = setupProps();
    const root = shallow(<Pad {...props} />);
    root.find(PadButton).simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });

  it('should not be disabled if onClick is provided', () => {
    const props = setupProps();
    const root = shallow(<Pad {...props} />);
    expect(root.find(PadButton).at(0).prop('disabled')).toBe(false);
  });

  it('should be disabled if onCLick is not provided', () => {
    const props={};
    const root = shallow(<Pad {...props} />);
    expect(root.find(PadButton).at(0).prop('disabled')).toBe(true);
  });
});
