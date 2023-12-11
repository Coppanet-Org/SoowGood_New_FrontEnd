import { TosterService } from 'src/app/shared/services/toster.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component } from '@angular/core';
import { DoctorScheduleService } from 'src/app/proxy/services';
import { MatDialog } from '@angular/material/dialog';
import { LiveConsultBookingDialogComponent } from '../live-consult-booking-dialog/live-consult-booking-dialog.component';

@Component({
  selector: 'app-live-doctor-card',
  templateUrl: './live-doctor-card.component.html',
  styleUrls: ['./live-doctor-card.component.scss']
})
export class LiveDoctorCardComponent {
  isAuthUser: number;


  constructor(private DoctorScheduleService:DoctorScheduleService,
    private NormalAuth: AuthService,
    public dialog: MatDialog,
    private TosterService : TosterService
    ){
    this.isAuthUser =  this.NormalAuth.authInfo()?.id;
  }

  onClickConsultNow(data:{name:string,id:number}){
     this.openDialog(data)
  }


  openDialog(data:{name:string,id:number}): void {
    // this.isLoading = true
     if (data.id) {
       this.DoctorScheduleService.getDetailsScheduleListByDoctorId(
        data.id
       ).subscribe((res) => {
        //  this.isLoading = false
        console.log(res);
        
       if (res?.length > 0 && data) {
         const dialogRef = this.dialog.open(LiveConsultBookingDialogComponent, {
           maxWidth:600,
           minWidth: 450,
           data: {
             doctorDetails:data,
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
}
