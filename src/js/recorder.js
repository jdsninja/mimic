import Data from '../db/data';
const Recorder = () => {
  return {
    record: (input) => {
      Data.push(input);
      console.log(Data);
    }
  }
}
export default Recorder;
