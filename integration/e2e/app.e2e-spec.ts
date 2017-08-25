import { browser, element, by } from 'protractor';

describe('TimeSince Lib E2E Tests', function () {

  beforeEach(() => browser.get(''));

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

  describe('Parse values', () => {
    it('should return time ago if parsable date value', () => {
      const years = new Date().getFullYear() - 2010;
      const dateStr = element(by.css('.date-str'));
      const dateNum = element(by.css('.date-num'));
      const dateObj = element(by.css('.date-obj'));
      expect(dateStr.getText()).toBe(`${years} years ago`);
      expect(dateNum.getText()).toBe(`${years} years ago`);
      expect(dateObj.getText()).toBe(`${years} years ago`);
    });

    it('should return original value if invalid date', () => {
      const dateInvalid = element(by.css('.date-invalid'));
      expect(dateInvalid.getText()).toBe(`foo ago`);
    });
  });

  describe('Units of time', () => {
    it('should return number of years', () => {
      const dateYears = element(by.css('.date-years'));
      const dateYear = element(by.css('.date-year'));

      expect(dateYears.getText()).toBe(`2 years ago`);
      expect(dateYear.getText()).toBe(`1 year ago`);
    });

    it('should return number of months', () => {
      const dateMonths = element(by.css('.date-months'));
      const dateMonth = element(by.css('.date-month'));

      expect(dateMonths.getText()).toBe(`2 months ago`);
      expect(dateMonth.getText()).toBe(`1 month ago`);
    });

    it('should return number of days', () => {
      const dateDays = element(by.css('.date-days'));
      const dateDay = element(by.css('.date-day'));

      expect(dateDays.getText()).toBe(`2 days ago`);
      expect(dateDay.getText()).toBe(`1 day ago`);
    });

    it('should return number of hours', () => {
      const dateHours = element(by.css('.date-hours'));
      const dateHour = element(by.css('.date-hour'));

      expect(dateHours.getText()).toBe(`2 hours ago`);
      expect(dateHour.getText()).toBe(`1 hour ago`);
    });

    it('should return number of minutes', () => {
      const dateMinutes = element(by.css('.date-mins'));
      const dateMinute = element(by.css('.date-min'));

      expect(dateMinutes.getText()).toBe(`2 minutes ago`);
      expect(dateMinute.getText()).toBe(`1 minute ago`);
    });

    it('should return number of seconds', () => {
      const dateSeconds = element(by.css('.date-secs'));
      const dateSecond = element(by.css('.date-sec'));

      expect(dateSeconds.getText()).toBe(`2 seconds ago`);
      expect(dateSecond.getText()).toBe(`1 second ago`);
    });
  });

});
