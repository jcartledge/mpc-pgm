import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<App />)).not.toThrow();
  });

  it('renders BankSelectButtons', () => {
    const root = shallow(<App />);
    expect(root.find('BankSelectButtons').length).toBe(1);
  });

  it('renders Banks', () => {
    const root = shallow(<App />);
    expect(root.find('Banks').length).toBe(1);
  });
});
