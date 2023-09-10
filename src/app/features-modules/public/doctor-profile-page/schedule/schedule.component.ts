import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingDialogComponent } from 'src/app/shared/components/booking-dialog/booking-dialog.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent  {
  selected:any
  constructor( public dialog: MatDialog){

  }
    openDialog():void {
      const dialogRef = this.dialog.open(BookingDialogComponent,{
        width: "40vw"
      });
    
      dialogRef.afterClosed().subscribe(result => {
       
      });
    
    }
}
