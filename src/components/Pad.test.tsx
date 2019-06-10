import React from 'react';
import { shallow } from 'enzyme';
import Pad, { PadProps, PadButton, DropZone } from './Pad';

describe('Pad', () => {
  const setupProps = (overrides: Partial<PadProps> = {}): PadProps => ({
    playAudioBuffer: jest.fn(),
    setFile: jest.fn(),
    clearFile: jest.fn(),
    ...overrides,
  });

  const setupAudioBuffer = (
    overrides: Partial<AudioBufferOptions> = {},
  ): AudioBuffer => ({
    length: 0,
    sampleRate: 0,
    duration: 0,
    numberOfChannels: 0,
    copyToChannel: jest.fn(),
    copyFromChannel: jest.fn(),
    getChannelData: jest.fn(),
    ...overrides,
  });

  it('should render', () => {
    const props = setupProps();
    expect(() => shallow(<Pad {...props} />)).not.toThrow();
  });

  it('should render DropZone if audiobuffer is not defined', () => {
    const props = setupProps({ audioBuffer: undefined });
    const root = shallow(<Pad {...props} />);
    expect(root.find(DropZone).length).toBe(1);
  });

  it('should render file name if file is supplied', () => {
    const file = new File([], 'test file name');
    const audioBuffer = setupAudioBuffer();
    const props = setupProps({ audioBuffer, file });
    const root = shallow(<Pad {...props} />);
    expect(root.find(PadButton).text()).toEqual(file.name);
  });

  it('should call playAudioBuffer when clicked', () => {
    const file = new File([], 'test file name');
    const audioBuffer = setupAudioBuffer();
    const props = setupProps({ audioBuffer, file });
    const root = shallow(<Pad {...props} />);
    root.find(PadButton).simulate('click');
    expect(props.playAudioBuffer).toHaveBeenCalledWith(audioBuffer);
  });

  it('should call clearFile when backspace is pressed', () => {
    const file = new File([], 'test file name');
    const audioBuffer = setupAudioBuffer();
    const props = setupProps({ audioBuffer, file });
    const root = shallow(<Pad {...props} />);
    root.find(PadButton).simulate('keyUp', {key: 'Backspace'});
    expect(props.clearFile).toHaveBeenCalled();
  });
});
