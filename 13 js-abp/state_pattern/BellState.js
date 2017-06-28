// BEGIN (write your solution here)
import State from './State';
import ClockState from './ClockState';
import AlarmState from './AlarmState';

export default class BellState extends State {
  constructor(clock) {
    super(clock);
  }
  
  clickH() {
    return false;
  }
  
  clickM() {
    return false;
  }
  
  tick() {
    this.clock.setState(ClockState);
    this.clock.mode = 'clock';
  }
  
  clickMode() {
    this.clock.mode = 'clock';
    this.clock.setState(ClockState);
  }
}
// END
