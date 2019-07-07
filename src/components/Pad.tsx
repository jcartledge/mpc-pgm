import React, { useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import AppContext from '../lib/AppContext';
import importedPlayAudioBuffer from '../lib/playAudioBuffer';
import { PadValue } from '../lib/types';
import DropZone from './styled/DropZone';
import PadButton from './styled/PadButton';

export type PadProps = PadValue & {
  playAudioBuffer?: (audioBuffer: AudioBuffer) => void;
};

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
