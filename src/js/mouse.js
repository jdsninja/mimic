import Recorder from './recorder';
import moment from 'moment';

const Mouse = (container) => {
  const recorder = Recorder('mouse');
  return {
    init: () => {
      // Mouse
      container.onmousemove = (e) => {
        recorder.record([moment().unix(), e]);
      }

      // Mouse Double click
      container.ondblclick = (e) => {
        recorder.record([moment().unix(), e]);
      }

      // Mouse Click
      container.onclick = (e) => {
        recorder.record([moment().unix(), e]);
      }
    }
  }
}

export default Mouse;
