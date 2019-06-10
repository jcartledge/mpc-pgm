import React, { useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import {PadValue} from '../lib/types';
import AppContext from '../lib/AppContext';

type PadDropZoneProps = Pick<PadValue, 'setFile'>;

const PadDropZone: React.FC<PadDropZoneProps> = ({ setFile, children }) => {
  const { dispatch} = useContext(AppContext);
  const onDrop = useCallback(
    acceptedFiles => {
      const [file] = acceptedFiles;
      setFile(file, dispatch);
    },
    [setFile, dispatch]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      {children}
      <input {...getInputProps()} />
    </div>
  );
};

export default PadDropZone;
