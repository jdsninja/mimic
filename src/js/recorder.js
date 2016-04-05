import Data from '../db/eventsLog';
import moment from 'moment';

const Recorder = (type) => {

  const record = (input) => {
    const t = moment().unix();
    Data[type].push({t, event: input});
  }

  return {
    record
  }
}
export default Recorder;
