import Recorder from '../recorder';
import Data from '../../db/eventsLog';
import test from 'tape';

test('Record one event should add somethign in the eventsLog', expect => {
   const recorder = Recorder('mouse');
    recorder.record('event');
    expect.equals(Data.mouse.length, 1, '1,2,3 wow');
    expect.end();
});
