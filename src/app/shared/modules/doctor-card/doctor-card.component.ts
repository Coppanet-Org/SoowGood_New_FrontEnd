import { DoctorScheduleStateService } from './../../services/states/doctor-schedule-state.service';
import { DoctorScheduleService } from './../../../proxy/services/doctor-schedule.service';
import { Component, Input, OnInit } from '@angular/core';
import { BookingDialogComponent } from '../../components/booking-dialog/booking-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DoctorScheduleDto } from 'src/app/proxy/dto-models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss'],
})
export class DoctorCardComponent implements OnInit {
  @Input() doctorDetails: any;
  doctorScheduleList: DoctorScheduleDto[] = [];
  constructor(
    public dialog: MatDialog,
    private DoctorScheduleService: DoctorScheduleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.doctorDetails != 'undefine || null') {
      this.DoctorScheduleService.getDetailsScheduleListByDoctorId(
        this.doctorDetails.id
      ).subscribe((res) => {
        this.doctorScheduleList = res
      });
    }
  }

  openDialog(): void {
      if (this.doctorScheduleList.length > 0 && this.doctorDetails) {
        const dialogRef = this.dialog.open(BookingDialogComponent, {
          maxWidth:600,
          minWidth: 450,
          data: {
            doctorDetails: this.doctorDetails,
            doctorScheduleInfo: this.doctorScheduleList,
          },
        });
        dialogRef.afterClosed().subscribe((result) => {});
      } else {
        console.log(`${this.doctorDetails} or ${this.doctorScheduleList} not found`);
      }
  }
  goToProfile(){
      this.router.navigate([`/search/doctors/${this.doctorDetails.id}`])
  }
}
