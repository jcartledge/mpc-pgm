import React from 'react';
import { shallow } from 'enzyme';
import Banks, { BanksProps } from './Banks';
import {setupContext} from '../lib/testSupport';

describe('Banks', () => {
  const setupProps = (overrides: Partial<BanksProps> = {}): BanksProps => ({
    useContext: jest.fn().mockReturnValue(setupContext()),
    ...overrides,
  });

  it('should render without crashing', () => {
    const props = setupProps();
    expect(() => shallow(<Banks {...props} />)).not.toThrow();
  });

  it('should render the correct bank', () => {});
  it('should render pads in the correct order', () => {});
  it('should pass PadValue to Pad', () => {});
});
