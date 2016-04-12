import Data from '../db/eventsLog.js';
import moment from 'moment';

export default () => {

  const findNextEvent = (data, startTime, nowTime) => {
    //todo
  };

  const play = () => {
    const delay = 100;
    const t = Date.now();
    let now = t;
    const newData = {};

    Object.keys(Data).map( x => {
      Data[x].map( y => {
        newData[parseInt(y.t)] = y.event;
      });
    });

    // Recording stats
    const objKeys = Object.keys(newData),
          startTime = objKeys[0], // When the recording started
          endTime = objKeys[objKeys.length - 1], // When the recording ended
          duration = moment().milliseconds(startTime).diff(moment().milliseconds(endTime), 'seconds');


    setInterval(() => { findNextEvent(newData, now += delay); }, delay);
  };

  return {
    play
  };
};
