import Recorder from './recorder';

const updateListener = (state) => ({
  update: () => {
    const { container, isRecording, events, parent } = state,
          recorder = Recorder('mouse');
    events.forEach( x => {
        parent[x] = (e) => isRecording ? recorder.record(e) : '';
    });
  }
});

export default (state) => {
  return Object.assign(
    {},
    updateListener(state)
  );
};
