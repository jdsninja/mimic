import config from './config';
import Keyboard from './keyboard';
import Mouse from './mouse';
import Recorder from './recorder';
import Scroll from './scroll';
import Timer from './timer';
import moment from 'moment';

const Mimic = (params) => {
  const container = document.getElementById(params.container);
  const recorder = Recorder('session');

  return {
    init: () => {
      //Recorder().record(`${moment().format('hh:mm:ss')}|start`);
      Keyboard().init();
      Mouse(container).init();
      Scroll().init();
      document.getElementById('start').onclick = (e) => {
        e.preventDefault();
        recorder.record('Start session');
      };
      document.getElementById('stop').onclick = (e) => {
        e.preventDefault();
        recorder.record('Stop session');
      };
    }
  }
}

global.Mimic = Mimic;
