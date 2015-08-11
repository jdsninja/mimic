import config from './config';

global.Mimic = function () {
	// Mouse
	document.onmousemove = function(e){
	  console.log('x',e.pageX, ', y',e.pageY);
	}

	// Mouse Double click
	document.ondblclick = function(e){
	  console.log('doubleclick');
	}

	// Mouse Click
	document.onclick = function(e){
	  console.log('click');
	}
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

	// Keyboard
	document.onkeydown = function(event) {
	  if (!event){
	    event = window.event; // need to double check what this does exactly
	  }
	  console.log(event.charCode, event.keyCode, String.fromCharCode(event.keyCode));
	};
};
