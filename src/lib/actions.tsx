const audioContext = new window.AudioContext();

export const playAudioBuffer = (audioBuffer: AudioBuffer): void => {
  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(audioContext.destination);
  source.start();
};

export const getAudioBuffer = (
  file: File,
  cb: (arg0: AudioBuffer) => void
): void => {
  const reader = new FileReader();
  reader.onerror = () => {
    reader.abort();
    throw new DOMException('Problem parsing input file.');
  };
  reader.onload = async () => {
    const audioBuffer = await audioContext.decodeAudioData(
      reader.result as ArrayBuffer
    );
    cb(audioBuffer);
  };
  reader.readAsArrayBuffer(file);
};
