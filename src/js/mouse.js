import Recorder from './recorder';

const Mouse = (container) => {
  const recorder = Recorder('mouse');
  return {
    init: () => {
      // Mouse
      container.onmousemove = (e) => {
        recorder.record(e);
      }

      // Mouse Double click
      container.ondblclick = (e) => {
        recorder.record(e);
      }

      // Mouse Click
      container.onclick = (e) => {
        recorder.record(e);
      }
    }
  }
}

export default Mouse;
