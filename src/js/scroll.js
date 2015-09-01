'use strict';

export default class Scroll {
  constructor() {
    var B = document.body,
        H = document.documentElement,
        height

    if (typeof document.height !== 'undefined') {
      height = document.height // For webkit browsers
    } else {
      height = Math.max( B.scrollHeight, B.offsetHeight,H.clientHeight, H.scrollHeight, H.offsetHeight );
    }

    document.onscroll = function() {
      if(window.scrollY === 0){
        console.log('page top');
      }else if(height === window.scrollY +  H.clientHeight){
        console.log('page bottom');
      }else{
        console.log('scrolling');
      }
    };
  }
}
