import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgentBookingDialogComponent } from 'src/app/shared/modules/agent-booking-dialog/agent-booking-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(public dialog: MatDialog) {}

  // handleDegreeEdit(row: any) {
  //   this.dialog
  //     .open(DegreeDialogComponentnt, {
  //       data: row,
  //       width: "40vw",
  //     })
  //     .afterClosed()
  //     .subscribe((result) => {
  //       if (result === true) {
  //         this.getDegreeDataList(this.doctorId);
  //       }
  //     });
  // }

  onClickBookingDialog(): void {
    const dialogRef = this.dialog.open(AgentBookingDialogComponent, {
      width: '40vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.getDegreeDataList(this.doctorId)
    });
  }
}
