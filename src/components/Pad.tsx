import React, { useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import AppContext from '../lib/AppContext';
import importedPlayAudioBuffer from '../lib/playAudioBuffer';
import { PadValue } from '../lib/types';

export type PadProps = PadValue & {
  playAudioBuffer?: (audioBuffer: AudioBuffer) => void;
};

export const PadButton = styled.button`
  width: 100px;
  height: 100px;
  &.active {
    background-color: silver;
  }
`;

export const DropZone = styled.div`
  &.dragActive button {
    box-shadow: 0px 0px 5px 0px gold;
  }
`;

const Pad: React.FC<PadProps> = ({
  setFile,
  clearFile,
  file,
  audioBuffer,
  playAudioBuffer = importedPlayAudioBuffer,
}) => {
  const { dispatch } = useContext(AppContext);
  const onDrop = useCallback(
    acceptedFiles => {
      const [file] = acceptedFiles;
      setFile(file, dispatch);
    },
    [setFile, dispatch],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return audioBuffer ? (
    <PadButton
      onClick={() => playAudioBuffer(audioBuffer)}
      onKeyUp={e => e.key === 'Backspace' && clearFile(dispatch)}
    >
      {file ? file.name : ''}
    </PadButton>
  ) : (
    <DropZone
      {...getRootProps({ className: isDragActive ? 'dragActive' : '' })}
    >
      <PadButton />
      <input {...getInputProps()} />
    </DropZone>
  );
};

export default Pad;
