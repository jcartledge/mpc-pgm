import React from 'react';
import styled from 'styled-components';
import PadDropZone from './PadDropZone';
import { playAudioBuffer } from '../lib/actions';
import { PadValue } from '../lib/types';

export type PadProps = PadValue;

export const PadButton = styled.button`
  width: 100px;
  height: 100px;
  &.active {
    background-color: silver;
  }
`;

const Pad: React.FC<PadProps> = ({ setFile, file, audioBuffer }) => {
  return audioBuffer ? (
    <>
      <PadButton onClick={() => playAudioBuffer(audioBuffer)}>
        {file ? file.name : ''}
      </PadButton>
    </>
  ) : (
    <PadDropZone setFile={setFile}>
      <PadButton />
    </PadDropZone>
  );
};

export default Pad;
