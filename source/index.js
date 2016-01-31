import config from './config';
import Keyboard from './keyboard';
import Mouse from './mouse';
import Recorder from './recorder';
import Scroll from './scroll';
import Timer from './timer';

const App = (params) => {
  const init = () => {
    Keyboard(params).init();
    Mouse(params).init();
    Scroll(params).init();
  };

  return {
    init
  };
};


//global.Mimic = Mimic;
App({
  containerId: 'stage'
}).init();
export default App;
/*
var mimic = new Mimic({
  container: "stage"
});
mimic.init('test');
*/
