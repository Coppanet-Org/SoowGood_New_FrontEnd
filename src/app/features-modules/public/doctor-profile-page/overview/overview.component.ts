import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  @Input() degreeDetails!: any;
  @Input() scheduleInfo!: any;
  constructor(private DatePipe: DatePipe) {}

  // convertTime(timeString: string): string | null {
  //   const date = new Date();
  //   const [hours, minutes] = timeString.split('.');
  //   date.setHours(parseInt(hours));
  //   date.setMinutes(parseInt(minutes));
  //   return this.DatePipe.transform(date, 'h:mm a');
  // }
}
