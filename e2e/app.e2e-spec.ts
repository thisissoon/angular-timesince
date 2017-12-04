import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('TimeSince Lib E2E Tests', function () {

  let page: AppPage;

  beforeEach(() => page = new AppPage());

  beforeEach(() => page.navigateTo());

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

  describe('Parse values', () => {
    it('should return time ago if parsable date value', () => {
      const years = new Date().getFullYear() - 2010;
      const dateStr = page.getElementDateStr();
      const dateNum = page.getElementDateNum();
      const dateObj = page.getElementDateObj();
      expect(dateStr.getText()).toBe(`${years} years ago`);
      expect(dateNum.getText()).toBe(`${years} years ago`);
      expect(dateObj.getText()).toBe(`${years} years ago`);
    });

    it('should return original value if invalid date', () => {
      const dateInvalid = page.getElementDateInvalid();
      expect(dateInvalid.getText()).toBe(`foo ago`);
    });
  });

  describe('Units of time', () => {
    it('should return number of years', () => {
      const dateYears = page.getElementDateYears();
      const dateYear = page.getElementDateYear();

      expect(dateYears.getText()).toBe(`2 years ago`);
      expect(dateYear.getText()).toBe(`1 year ago`);
    });

    it('should return number of months', () => {
      const dateMonths = page.getElementDateMonths();
      const dateMonth = page.getElementDateMonth();

      expect(dateMonths.getText()).toBe(`2 months ago`);
      expect(dateMonth.getText()).toBe(`1 month ago`);
    });

    it('should return number of days', () => {
      const dateDays = page.getElementDateDays();
      const dateDay = page.getElementDateDay();

      expect(dateDays.getText()).toBe(`2 days ago`);
      expect(dateDay.getText()).toBe(`1 day ago`);
    });

    it('should return number of hours', () => {
      const dateHours = page.getElementDateHours();
      const dateHour = page.getElementDateHour();

      expect(dateHours.getText()).toBe(`2 hours ago`);
      expect(dateHour.getText()).toBe(`1 hour ago`);
    });

    it('should return number of minutes', () => {
      const dateMinutes = page.getElementDateMins();
      const dateMinute = page.getElementDateMin();

      expect(dateMinutes.getText()).toBe(`2 minutes ago`);
      expect(dateMinute.getText()).toBe(`1 minute ago`);
    });

    it('should return number of seconds', () => {
      const dateSeconds = page.getElementDateSecs();
      const dateSecond = page.getElementDateSec();

      expect(dateSeconds.getText()).toBe(`2 seconds ago`);
      expect(dateSecond.getText()).toBe(`1 second ago`);
    });
  });

});
