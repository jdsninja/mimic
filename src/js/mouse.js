import Recorder from './recorder';

const Mouse = (container) => {
  const recorder = Recorder('mouse');

  const startRecording = (recording, e) => {
    if (recording) {
      recorder.record(e);
    }
  };

  const initRecorder = (recording) => {
    // Mouse mouve
    container.onmousemove = (e) => startRecording(recording, e);

    // Mouse Double click
    container.ondblclick = (e) => startRecording(recording, e);

    // Mouse Click
    container.onclick = (e) => startRecording(recording, e);
  };

    const record = () => initRecorder(true);

    const stop = () => initRecorder(false);

    return {
      record,
      stop
    }
}

export default Mouse;
