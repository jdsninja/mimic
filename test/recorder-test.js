import test from 'tape';
import Recorder from '../src/js/recorder';
import Data from '../src/db/eventsLog';

test('Record one event should add something in the eventsLog', expect => {
  const recorder = Recorder('mouse');
   recorder.record('event');
   expect.equals(Data.mouse.length, 1, '1,2,3 wow');
   expect.end();
});
