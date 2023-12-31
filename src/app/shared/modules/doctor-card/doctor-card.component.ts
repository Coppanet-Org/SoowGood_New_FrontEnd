import { TosterService } from 'src/app/shared/services/toster.service';
import { DoctorScheduleService } from './../../../proxy/services/doctor-schedule.service';
import { Component, Input, OnInit } from '@angular/core';
import { BookingDialogComponent } from '../../components/booking-dialog/booking-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DoctorScheduleDto } from 'src/app/proxy/dto-models';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserinfoStateService } from '../../services/states/userinfo-state.service';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss'],
})
export class DoctorCardComponent implements OnInit {
  @Input() doctorDetails: any;
 
  doctorScheduleList: DoctorScheduleDto[] = [];
  isLoading: boolean = false;
  isAuthUser:any;
  constructor(
    public dialog: MatDialog,
    private DoctorScheduleService: DoctorScheduleService,
    private router: Router,
    private TosterService : TosterService,
    private NormalAuth : AuthService,
    private UserinfoStateService :UserinfoStateService
  ) {}

ngOnInit(): void {
  this.isAuthUser =  this.NormalAuth.authInfo()?.id;
}

  openDialog(): void {

    // if (!this.isAuthUser) {
    //   this.router.navigate(['/login'])
    //   return
    // }

   this.isLoading = true
    if (this.doctorDetails != 'undefine || null') {
      this.DoctorScheduleService.getDetailsScheduleListByDoctorId(
        this.doctorDetails.id
      ).subscribe((res) => {
        this.isLoading = false
      if (res?.length > 0 && this.doctorDetails) {
        const dialogRef = this.dialog.open(BookingDialogComponent, {
          maxWidth:600,
          minWidth: 450,
          data: {
            doctorDetails: this.doctorDetails,
            doctorScheduleInfo: res,
            isAuthUser : this.isAuthUser ? true : false
          },
        });
        dialogRef.afterClosed().subscribe((result) => {});
      } else {
        this.TosterService.customToast(`No Details/Schedule found`,"warning")
      }
      });
    }

  }
  goToProfile(){
      this.router.navigate([`/search/doctors/${this.doctorDetails.id}`])
  }
}
