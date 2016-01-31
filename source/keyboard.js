import { onkeydown } from './events';
import Recorder from './recorder';

export default (props) => {
  const init = () => {
    onkeydown(props, (e) => {
      Recorder().record(`k:${e.keyCode}`);
      //console.log(e.charCode, e.keyCode, String.fromCharCode(e.keyCode));
    });
  };
  return {
    init
  };
};
