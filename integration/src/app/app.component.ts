import { Component } from '@angular/core';

@Component({
  selector: 'integration-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateStr = '2010-08-24T16:16:09.540Z';
  dateObj = new Date('2010-08-24T16:16:09.540Z');
  dateNum = 1282666569540;
}
