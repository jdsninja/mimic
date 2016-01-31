import { onscroll } from './events';

export default (props) => {
  const init = () => {
    const B = document.body,
        H = document.documentElement;
    let height = null;

    if (typeof document.height !== 'undefined') {
      height = document.height; // For webkit browsers
    } else {
      height = Math.max( B.scrollHeight, B.offsetHeight, H.clientHeight, H.scrollHeight, H.offsetHeight );
    }

    onscroll(props, (e) => {
      if (window.scrollY === 0) {
        console.log('page top');
      } else if (height === window.scrollY + H.clientHeight) {
        console.log('page bottom');
      } else {
        console.log('scrolling');
      }
    });
  };

  return {
    init
  };
};
