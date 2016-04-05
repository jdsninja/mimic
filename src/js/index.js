import Keyboard from './keyboard';
import Mouse from './mouse';
import Recorder from './recorder';

const Mimic = (params) => {
  const container = document.getElementById(params.container),
        recorder = Recorder('session'),
        keyboard = Keyboard(),
        mouse = Mouse(container);

  const startRecording = () => {
    recorder.record('Start recording');
    keyboard.record();
    mouse.record();
  }

  const stopRecording = () => {
    keyboard.stop();
    mouse.stop();
    recorder.record('Stop recording');
  }

  const init = () => {
    document.getElementById('start').onclick = (e) => {
      e.preventDefault();
      startRecording();
    };
    document.getElementById('stop').onclick = (e) => {
      e.preventDefault();
      stopRecording();
    };
  }

  return {
    init
  }
}

global.Mimic = Mimic;
