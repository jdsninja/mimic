import Data from '../db/eventsLog.js';
import moment from 'moment';

export default () => {

  const showEvent = ({events}) => {
    const lastEvent = events[events.length - 1];
    let mouse = document.getElementById('mouse');
    switch (lastEvent.type) {
      case 'mousemove':
        mouse.style.left = lastEvent.x + 'px';
        mouse.style.top = lastEvent.y + 'px';
      break;
      default: break;
    }
  };

  const waitForNextEvent = ({ timeline }) => {
    if ( timeline.length ) {
      const nextEventTime = timeline.splice(0, 1), // get the next event time
            delay = timeline[0] - nextEventTime[0]; // Calculated the delay between now and the next event

      // Show current event
      showEvent({events: Data[nextEventTime]});

      // Call next event
      setTimeout(() => {
        waitForNextEvent({ timeline });
      }, delay * 1000);
    }
  };

  const play = () => {
    // Convert all the recorded time into an array
    let timeline = Object.keys(Data).map( x => x );
    // Start playing events
    waitForNextEvent({ timeline });
  };

  return {
    play
  };
};
