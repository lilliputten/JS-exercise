// BEGIN (write your solution here)
import State from './State';
import AlarmState from './AlarmState';
import BellState from './BellState';

export default class ClockState extends State {
  constructor(clock) {
    super(clock);
  }

  clickMode() {
    this.clock.mode = 'alarm';
    this.clock.setState(AlarmState);
  }

  tick() {
    if (this.clock.isAlarmOn() && this.clock.isAlarmTime()) {
      this.clock.setState(BellState);
      this.clock.mode = 'bell';
    }
  }

  longClickMode() {
    this.clock.mode = 'alarm';
    this.clock.setState(AlarmState);
  }
  
  clickH() {
    this.clock.hour === 24 ? this.clock.hour = 1 : this.clock.hour++;
  }
  
  clickM() {
    this.clock.mins === 60 ? (this.clock.mins = 1, clickH()) 
      : this.clock.mins++;
  }
    
}
// END
