import Data from '../db/eventsLog.js';
import moment from 'moment';

export default () => {

  const waitForNextEvent = ({ timeline }) => {
    if ( timeline.length ) {
      const nextEventTime = timeline.splice(0, 1),
            delay = timeline[0] - nextEventTime;
      setTimeout(() => {
        waitForNextEvent({ timeline });
      }, delay * 1000);
    }
  };

  const play = () => {
    let timeline = Object.keys(Data).map( x => x );
    waitForNextEvent({ timeline });
  };

  return {
    play
  };
};
