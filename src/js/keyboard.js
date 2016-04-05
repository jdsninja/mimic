import Recorder from './recorder';

const Keyboard = () => {

  const recorder = Recorder('keyboard');

  const initRecorder = (recording) => {
    document.onkeydown = (e) => {
      if (!e) {
        event = window.event; // need to double check what this does exactly
      }
      //event.charCode, event.keyCode, String.fromCharCode(event.keyCode)
      if (recording) {
        recorder.record(e);
      }
    };
  };

  const record = () => initRecorder(true);

  const stop = () => initRecorder(false);

  return {
    record,
    stop
  }
}
export default Keyboard;
