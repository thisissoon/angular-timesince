import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TimeSinceModule } from './time-since';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TimeSinceModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
