import Data from '../db/eventsLog';
const Recorder = (type) => {
  let timer = setTimeout(stopRecording, 3000),
      recording = false,
      waitingPeriode = 2000;

  // Star recording
  const startRecording = () => {
    recording = true;
    timer = setTimeout(stopRecording, waitingPeriode);
  }

  // Stop recording after 2 sec of innactivity
  const stopRecording = () => { recording = false;console.log(Data); }

  // Reset the timer to make sure the it won't stop
  const resetTimer = () => {
    clearTimeout(timer);
    timer = setTimeout(stopRecording, waitingPeriode);
  }

  return {
    record: (input) => {
      Data[type].push(input);
      if (recording) {
        // Reset the timer if we are currently recording somethign
        resetTimer();
      } else {
        startRecording();
      }
    }
  }
}
export default Recorder;
