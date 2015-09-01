'use strict';

export default class Keyboard {
  constructor() {
    document.onkeydown = function(event) {
      if (!event){
        event = window.event; // need to double check what this does exactly
      }
      console.log(event.charCode, event.keyCode, String.fromCharCode(event.keyCode));
    };
  }
}
