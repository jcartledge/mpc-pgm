import React from 'react';
import { shallow } from 'enzyme';
import Banks from './Banks';

describe('Banks', () => {
  it('should render without crashing', () => {
    expect(() => shallow(<Banks selectedBankName="A" />)).not.toThrow();
  });
});
