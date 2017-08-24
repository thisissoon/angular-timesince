import { browser, element, by } from 'protractor';

describe('TimeSince Lib E2E Tests', function () {

  beforeEach(() => browser.get(''));

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

  describe('Transform Date', () => {
    it('should return time ago', () => {
      const years = new Date().getFullYear() - 2010;
      expect(element(by.css('.date-str')).getText()).toBe(`${years} years ago`);
    });
  });

});
