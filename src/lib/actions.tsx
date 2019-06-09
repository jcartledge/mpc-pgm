export const getAudioBuffer = (
  file: File,
  cb: (arg0: ArrayBuffer) => void
): void => {
  const reader = new FileReader();
  reader.onerror = () => {
    reader.abort();
    throw new DOMException('Problem parsing input file.');
  };
  reader.onload = () => cb(reader.result as ArrayBuffer);
  reader.readAsArrayBuffer(file);
};
