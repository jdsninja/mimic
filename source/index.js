import config from './config';
import Keyboard from './keyboard';
import Mouse from './mouse';
import Recorder from './recorder';
import Scroll from './scroll';
import Timer from './timer';

const App = (params) => {
  return {
    /*const container = document.getElementById(params.container);
    var keyboard = new Keyboard();

    var mouse = new Mouse(container);
    var scroll = new Scroll();*/
    init: () => {
      Keyboard().init();
      console.log('asdf');
    }
  };
};


//global.Mimic = Mimic;
App({
  container: 'stage'
}).init();
export default App;
/*
var mimic = new Mimic({
  container: "stage"
});
mimic.init('test');
*/
