// BEGIN (write your solution here)
import ClockState from './ClockState';
import AlarmState from './AlarmState';
import BellState from './BellState';

export default class AlarmClock {
  constructor() {
    this.hour = 12;
    this.mins = 0;
    this.alarmhour = 6;
    this.alarmmins = 0;
    this.setState(ClockState);
    this.alarmon = false;
    this.mode = 'clock';
  }

  setState(Klass) {
    this.state = new Klass(this);
  }

  minutes() {
    return this.mins;
  }

  hours() {
    return this.hour;
  }

  alarmMinutes() {
    return this.alarmmins;
  }

  alarmHours() {
    return this.alarmhour;
  }

  isAlarmOn() {
    return this.alarmon;
  }

  isAlarmTime() {
    return this.hour === this.alarmhour && this.mins  === this.alarmmins;
  }

  getCurrentMode() {
    return this.mode;
  }

  clickMode() {
    this.state.clickMode();
  }

  tick() {
    this.mins === 59 ? (this.mins = 0, this.clickH()) 
      : this.mins++;
    this.state.tick();
  }

  longClickMode() {
    this.alarmon = !this.alarmon;
  }

  clickH() {
    this.state.clickH();
  }
  
  clickM() {
    this.state.clickM();
  }
}
// END