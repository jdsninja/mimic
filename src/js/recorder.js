import Data from '../db/eventsLog.js';
import moment from 'moment';

const Recorder = (type) => {

  const record = (input) => {
    const t = moment().unix();
    console.log(input);
    Data[type].push({t, event: input});
  };

  return {
    record
  };
};
export default Recorder;
