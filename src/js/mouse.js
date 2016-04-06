import Listener from './listener';

const recording = (state) => ({
  record: () => {
    state.isRecording = true;
  }
});

const stoping = (state) => ({
  stop: () => state.isRecording = false
});

export default (container) => {
  let state = {
    container,
    isRecording: false,
    parent: container,
    events: ['onmousemove', 'ondblclick', 'onclick']
  };

  return Object.assign(
    {},
    recording(state),
    stoping(state),
    Listener(state)
  );
}
