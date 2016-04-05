import config from './config';
import Keyboard from './keyboard';
import Mouse from './mouse';
import Recorder from './recorder';
import Scroll from './scroll';
import Timer from './timer';
import moment from 'moment';
import Data from '../db/eventsLog';

const Mimic = (params) => {

  const container = document.getElementById(params.container),
        recorder = Recorder('session'),
        keyboard = Keyboard(),
        mouse = Mouse(container),
        scroll = Scroll();

  const startRecording = () => {
    console.log(Data);
    recorder.record('Start recording');
    keyboard.record();
    mouse.record();
    scroll.record();
  }

  const stopRecording = () => {
    keyboard.stop();
    mouse.stop();
    scroll.stop();
    recorder.record('Stop recording');
    console.log(Data);
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
