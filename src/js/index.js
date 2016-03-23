import config from './config';
import Keyboard from './keyboard';
import Mouse from './mouse';
import Recorder from './recorder';
import Scroll from './scroll';
import Timer from './timer';
import moment from 'moment';

const Mimic = (params) => {
  const container = document.getElementById(params.container);
  return {
    init: () => {
      Recorder().record(`${moment().format('hh:mm:ss')}|start`);
      Keyboard().init();
      Mouse(container).init();
      Scroll().init();
    }
  }
}

global.Mimic = Mimic;
