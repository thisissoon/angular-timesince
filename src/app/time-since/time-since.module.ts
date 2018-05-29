import { NgModule } from '@angular/core';

import { TimeSincePipe } from './time-since.pipe';

/**
 * A simple lightweight library for Angular which returns the
 * number of seconds, minutes, days, months or years since any Date
 * object based on the current system time
 */
@NgModule({
  declarations: [TimeSincePipe],
  exports: [TimeSincePipe]
})
export class TimeSinceModule {}
