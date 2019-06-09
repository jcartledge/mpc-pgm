import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaUpload } from 'react-icons/fa';

type PadDropZoneProps = {
  setFile: (arg0: File) => void;
};

const PadDropZone: React.FC<PadDropZoneProps> = ({ setFile }) => {
  const onDrop = useCallback(
    acceptedFiles => {
      const [file] = acceptedFiles;
      setFile(file);
    },
    [setFile]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <FaUpload />
      <input {...getInputProps()} />
    </div>
  );
};

export default PadDropZone;
