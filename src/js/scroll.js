import Recorder from './recorder';

const Scroll = () => {
  const recorder = Recorder('scroll');
  let B = document.body,
      H = document.documentElement,
      height;

  if (typeof document.height !== 'undefined') {
    height = document.height; // For webkit browsers
  } else {
    height = Math.max( B.scrollHeight, B.offsetHeight, H.clientHeight, H.scrollHeight, H.offsetHeight );
  }

  const initRecorder = (recording) => {
    document.onscroll = (e) => {
      if (recording) {
        recorder.record(e);
        if (window.scrollY === 0) {
          console.log('page top');
        } else if (height === window.scrollY + H.clientHeight) {
          console.log('page bottom');
        } else {
          console.log('scrolling');
        }
      }
    };
  };

  const record = () => initRecorder(true);

  const stop = () => initRecorder(false);

  return {
    record,
    stop
  };
};
export default Scroll;
