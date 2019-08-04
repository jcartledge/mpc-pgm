const getAudioBuffer = (file: File, cb: (arg0: AudioBuffer) => void): void => {
  const reader = new FileReader();
  reader.onerror = () => {
    reader.abort();
    throw new DOMException('Problem parsing input file.');
  };
  reader.onload = async () => {
    const audioContext = new window.AudioContext();
    const audioBuffer = await audioContext.decodeAudioData(
      reader.result as ArrayBuffer,
    );
    cb(audioBuffer);
  };
  reader.readAsArrayBuffer(file);
};

export default getAudioBuffer;
