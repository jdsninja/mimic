import { onmousemove, ondblclick, onclick } from './events';
import Recorder from './recorder';

export default (props) => {
  const init = () => {
    onmousemove(props, (e) => {
      Recorder().record(`mm:${e.pageX},${e.pageY}`);
    });
    ondblclick(props, (e) => {
      Recorder().record('db');
    });
    onclick(props, (e) => {
      Recorder().record('c');
    });
  };
  return {
    init
  };
};
