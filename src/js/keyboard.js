import Recorder from './recorder';

const Keyboard = () => {
  return {
    init: () => {
      document.onkeydown = (e) => {
        if (!e) {
          event = window.event; // need to double check what this does exactly
        }
        //event.charCode, event.keyCode, String.fromCharCode(event.keyCode)
        Recorder('keyboard').record(e);
      };
    }
  }
}
export default Keyboard;
