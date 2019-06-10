import React from 'react';
import { shallow } from 'enzyme';
import Banks from './Banks';

describe('Banks', () => {
  it('should render without crashing', () => {
    expect(() => shallow(<Banks bankName="A" />)).not.toThrow();
  });
  it('should render the correct bank', () => {});
  it('should render pads in the correct order', () => {});
  it('should pass setFile to PadDropZone', () => {});
  it('should pass onClick to Pad', () => {});
  it('should pass filename to Pad', () => {});
});
