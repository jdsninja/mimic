import Data from '../db/eventsLog.js';
import moment from 'moment';

export default (type) => {
  const record = (input) => {
    const t = Date.now();
    Data[type].push({t, event: input});
  };

  return {
    record
  };
};
