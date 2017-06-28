// BEGIN (write your solution here)
import State from './State';
import ClockState from './ClockState';
import BellState from './BellState';

export default class AlarmState extends State {
  constructor(clock) {
    super(clock);
  }

  clickMode() {
    this.clock.mode = 'clock';
    this.clock.setState(ClockState);
  }

  tick() {
    if (this.clock.isAlarmOn() && this.clock.isAlarmTime()) {
      this.clock.setState(BellState);
      this.clock.mode = 'bell';
    }
  }

  clickH() {
    this.clock.alarmhour === 23 ? this.clock.alarmhour = 0 
      : this.clock.alarmhour++;
  }
  
  clickM() {
    this.clock.alarmmins === 60 ? this.clock.alarmmins = 1 
      : this.clock.alarmmins++;
  }
}
// END
