import Data from '../db/eventsLog.js';
import moment from 'moment';

export default () => {
  const record = (input) => {
    const t = Math.floor(Date.now() / 1000); // create new timestamp and remove milliseconds
    if ( !Data.hasOwnProperty(t) ) {
      Data[t] = [];
    }
    Data[t].push(input);
  };

  return {
    record
  };
};
