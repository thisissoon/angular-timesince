import { TimeSincePipe } from './time-since.pipe';
import * as durations from './shared/durations';

describe('TimeSincePipe', () => {
  let pipe: TimeSincePipe;
  let now: Date;
  let date: Date;

  beforeEach(() => {
    pipe = new TimeSincePipe();
    now = new Date();
    date = new Date();
  });

  describe('parsable date values', () => {
    it('should parse date string', () => {
      const year = (durations.secondsInYear * durations.millisecondsInSecond);
      date.setTime(now.getTime() - year);
      const dateStr = date.toISOString();
      const result = pipe.transform(dateStr);
      expect(result).toEqual('1 year');
    });

    it('should parse number', () => {
      const year = (durations.secondsInYear * durations.millisecondsInSecond);
      date.setTime(now.getTime() - year);
      const dateNum = date.getTime();
      const result = pipe.transform(dateNum);
      expect(result).toEqual('1 year');
    });

    it('should return original string if not date parsable value', () => {
      const result = pipe.transform('foo');
      expect(result).toEqual('foo');
    });
  });

  describe('units of time', () => {
    it('should return number of years', () => {
      const year = (durations.secondsInYear * durations.millisecondsInSecond);

      date.setTime(now.getTime() - year);
      let result = pipe.transform(date.getTime());
      expect(result).toEqual('1 year');

      date.setTime(now.getTime() - (year * 2));
      result = pipe.transform(date.getTime());
      expect(result).toEqual('2 years');
    });

    it('should return number of months', () => {
      const month = (durations.secondsInMonth * durations.millisecondsInSecond);

      date.setTime(now.getTime() - month);
      let result = pipe.transform(date.getTime());
      expect(result).toEqual('1 month');

      date.setTime(now.getTime() - (month * 2));
      result = pipe.transform(date.getTime());
      expect(result).toEqual('2 months');
    });

    it('should return number of days', () => {
      const day = (durations.secondsInDay * durations.millisecondsInSecond);

      date.setTime(now.getTime() - day);
      let result = pipe.transform(date.getTime());
      expect(result).toEqual('1 day');

      date.setTime(now.getTime() - (day * 2));
      result = pipe.transform(date.getTime());
      expect(result).toEqual('2 days');
    });

    it('should return number of hours', () => {
      const hour = (durations.secondsInHour * durations.millisecondsInSecond);

      date.setTime(now.getTime() - hour);
      let result = pipe.transform(date.getTime());
      expect(result).toEqual('1 hour');

      date.setTime(now.getTime() - (hour * 2));
      result = pipe.transform(date.getTime());
      expect(result).toEqual('2 hours');
    });

    it('should return number of minutes', () => {
      const minute = (durations.secondsInMin * durations.millisecondsInSecond);

      date.setTime(now.getTime() - minute);
      let result = pipe.transform(date.getTime());
      expect(result).toEqual('1 minute');

      date.setTime(now.getTime() - (minute * 2));
      result = pipe.transform(date.getTime());
      expect(result).toEqual('2 minutes');
    });

    it('should return number of seconds', () => {
      const second = durations.millisecondsInSecond;

      date.setTime(now.getTime() - second);
      let result = pipe.transform(date.getTime());
      expect(result).toEqual('1 second');

      date.setTime(now.getTime() - (second * 2));
      result = pipe.transform(date.getTime());
      expect(result).toEqual('2 seconds');
    });
  });
});
