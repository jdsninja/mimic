'use strict';

import config from './config';
import Keyboard from './keyboard';
import Mouse from './mouse';
import Recorder from './recorder';
import Scroll from './scroll';
import Timer from './timer';

class Mimic {
  /**
  * @param {object} params
  * - container
  */
  constructor(params) {
    this.container = document.getElementById(params.container);
  }
  init() {
    var keyboard = new Keyboard();
    var mouse = new Mouse(this.container);
    var scroll = new Scroll();
  }
};

global.Mimic = Mimic;
