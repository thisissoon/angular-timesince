import { Pipe, PipeTransform } from '@angular/core';

import * as durations from './shared/durations';

/**
 * Based on {@link http://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site}
 * Returns the number of seconds, minutes, days, months or years since
 * any Date object based on the current system time
 *
 * @example
 * ```html
 *  <p>{{ date | timeSince }} ago</p>
 * ```
 */
@Pipe({
  name: 'timeSince',
})
export class TimeSincePipe implements PipeTransform {
  /**
   * Attempt to convert the input into a Date object and return the original
   * input if not a valid date. If input is a valid date then calculate the
   * time in seconds from Date Object to 'now'. Then try to divide the number
   * of seconds between now and the date by the number of seconds in a year,
   * month, day, hour or minute
   *
   * @memberof TimeSincePipe
   */
  public transform(value: any, args?: any): any {
    const date: Date = new Date(value);

    if (isNaN(date.getTime())) {
      return value;
    }

    const seconds = Math.abs(
      Math.floor(
        (new Date().getTime() - date.getTime()) /
          durations.millisecondsInSecond,
      ),
    );

    let interval = Math.floor(seconds / durations.secondsInYear);

    if (interval > 1) {
      return `${interval} years`;
    }
    if (interval === 1) {
      return `${interval} year`;
    }

    interval = Math.floor(seconds / durations.secondsInMonth);

    if (interval > 1) {
      return `${interval} months`;
    }
    if (interval === 1) {
      return `${interval} month`;
    }

    interval = Math.floor(seconds / durations.secondsInDay);

    if (interval > 1) {
      return `${interval} days`;
    }
    if (interval === 1) {
      return `${interval} day`;
    }

    interval = Math.floor(seconds / durations.secondsInHour);

    if (interval > 1) {
      return `${interval} hours`;
    }
    if (interval === 1) {
      return `${interval} hour`;
    }

    interval = Math.floor(seconds / durations.secondsInMin);

    if (interval > 1) {
      return `${interval} minutes`;
    }
    if (interval === 1) {
      return `${interval} minute`;
    }

    return `${Math.floor(seconds)} ${seconds === 1 ? 'second' : 'seconds'}`;
  }
}
