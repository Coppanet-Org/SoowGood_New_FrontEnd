import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingDialogComponent } from 'src/app/shared/components/booking-dialog/booking-dialog.component';
import { ActivatedRoute } from '@angular/router';
import {
  DoctorProfileService,
  DoctorScheduleService,
} from 'src/app/proxy/services';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  selected: any;
  doctorDetails: any;
  doctorScheduleList: any;
  constructor(
    public dialog: MatDialog,
    private router: ActivatedRoute,
    private DoctorProfileService: DoctorProfileService,
    private DoctorScheduleService: DoctorScheduleService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe(({ id }) => {
      this.DoctorProfileService.get(id).subscribe((res) => {
        this.doctorDetails = res;
      });
      this.DoctorScheduleService.getDetailsScheduleListByDoctorId(id).subscribe(
        (res) => {
          this.doctorScheduleList = res;
        }
      );
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BookingDialogComponent, {
      width: '40vw',
      data: {
        doctorDetails: this.doctorDetails,
        doctorScheduleInfo: this.doctorScheduleList,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
