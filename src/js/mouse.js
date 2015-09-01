'use strict';

export default class Mouse {
  constructor(container) {
    // Mouse
    container.onmousemove = function(e){
      console.log('x',e.pageX, ', y',e.pageY);
    }

    // Mouse Double click
    container.ondblclick = function(e){
      console.log('doubleclick');
    }

    // Mouse Click
    container.onclick = function(e){
      console.log('click');
    }
  }
}
