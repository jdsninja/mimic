import Recorder from './recorder';
import moment from 'moment';

const Keyboard = () => {
  return {
    init: () => {
      document.onkeydown = function(event) {
        if (!event) {
          event = window.event; // need to double check what this does exactly
        }
        //event.charCode, event.keyCode, String.fromCharCode(event.keyCode)
        Recorder().record(`${moment().format('hh:mm:ss')}|kd|${String.fromCharCode(event.keyCode)}`);
      };
    }
  }
}
export default Keyboard;
