import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getElementDateStr() {
    return element(by.css('.date-str'));
  }

  getElementDateNum() {
    return element(by.css('.date-num'));
  }

  getElementDateObj() {
    return element(by.css('.date-obj'));
  }

  getElementDateInvalid() {
    return element(by.css('.date-invalid'));
  }

  getElementDateYears() {
    return element(by.css('.date-years'));
  }

  getElementDateYear() {
    return element(by.css('.date-year'));
  }

  getElementDateMonths() {
    return element(by.css('.date-months'));
  }

  getElementDateMonth() {
    return element(by.css('.date-month'));
  }

  getElementDateDays() {
    return element(by.css('.date-days'));
  }

  getElementDateDay() {
    return element(by.css('.date-day'));
  }

  getElementDateHours() {
    return element(by.css('.date-hours'));
  }

  getElementDateHour() {
    return element(by.css('.date-hour'));
  }

  getElementDateMins() {
    return element(by.css('.date-mins'));
  }

  getElementDateMin() {
    return element(by.css('.date-min'));
  }

  getElementDateSecs() {
    return element(by.css('.date-secs'));
  }

  getElementDateSec() {
    return element(by.css('.date-sec'));
  }
}
