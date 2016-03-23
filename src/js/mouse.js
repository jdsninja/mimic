import Recorder from './recorder';
import moment from 'moment';

const Mouse = (container) => {
  return {
    init: () => {
      // Mouse
      container.onmousemove = function(e){
        Recorder().record(`${moment().format('hh:mm:ss')}|mm|${e.pageX}:${e.pageY}`);
      }

      // Mouse Double click
      container.ondblclick = function(e){
        Recorder().record(`${moment().format('hh:mm:ss')}|dc`);
      }

      // Mouse Click
      container.onclick = function(e){
        Recorder().record(`${moment().format('hh:mm:ss')}|c`);
      }
    }
  }
}

export default Mouse;
