const playAudioBuffer = (audioBuffer: AudioBuffer): void => {
  const audioContext = new window.AudioContext();
  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(audioContext.destination);
  source.start();
};

export default playAudioBuffer;
