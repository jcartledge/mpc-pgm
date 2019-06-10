import { ReducerClearFileAction, ReducerSetFileAction } from './reducers';
import { AppState } from './types';

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

export const setFile = (
  { bankName, padNum, file, audioBuffer }: ReducerSetFileAction,
  draft: AppState
) => {
  const pad = draft.banks[bankName][padNum];
  pad.file = file;
  pad.audioBuffer = audioBuffer;
};

export const clearFile = (
  { bankName, padNum }: ReducerClearFileAction,
  draft: AppState
) => {
  const pad = draft.banks[bankName][padNum];
  delete pad.file;
  delete pad.audioBuffer;
};
