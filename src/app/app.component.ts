import { Component } from '@angular/core';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  now = new Date();
  dateStr = '2010-08-24T16:16:09.540Z';
  dateObj = new Date('2010-08-24T16:16:09.540Z');
  dateNum = 1282666569540;

  dateYears = this.now.getTime() - 63072000 * 1000;
  dateYear = this.now.getTime() - 31536000 * 1000;
  dateMonths = this.now.getTime() - 5184000 * 1000;
  dateMonth = this.now.getTime() - 2592000 * 1000;
  dateDays = this.now.getTime() - 172800 * 1000;
  dateDay = this.now.getTime() - 86400 * 1000;
  dateHours = this.now.getTime() - 7200 * 1000;
  dateHour = this.now.getTime() - 3600 * 1000;
  dateMins = this.now.getTime() - 120 * 1000;
  dateMin = this.now.getTime() - 60 * 1000;
  dateSecs = this.now.getTime() - 2 * 1000;
  dateSec = this.now.getTime() - 1000;

  dateInvalid = 'foo';
}
