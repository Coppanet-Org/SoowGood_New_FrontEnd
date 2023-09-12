import { DoctorScheduleService } from './../../../proxy/services/doctor-schedule.service';
import { Component, Input, OnInit } from '@angular/core';
import { BookingDialogComponent } from '../../components/booking-dialog/booking-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DoctorScheduleDto } from 'src/app/proxy/dto-models';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss'],
})
export class DoctorCardComponent implements OnInit {
  @Input() doctorDetails: any;
  doctorScheduleInfo: DoctorScheduleDto[] = [];
  constructor(
    public dialog: MatDialog,
    private DoctorScheduleService: DoctorScheduleService
  ) {}

  ngOnInit(): void {
    if (this.doctorDetails != 'undefine || null') {
      this.DoctorScheduleService.getDetailsScheduleListByDoctorId(
        this.doctorDetails.id
      ).subscribe((res) => (this.doctorScheduleInfo = res));
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BookingDialogComponent, {
      width: '40vw',
      data: {
        doctorDetails: this.doctorDetails,
        doctorScheduleInfo: this.doctorScheduleInfo,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
