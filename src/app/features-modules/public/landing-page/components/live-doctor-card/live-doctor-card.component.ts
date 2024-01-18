import { TosterService } from 'src/app/shared/services/toster.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, Input } from '@angular/core';
import { DoctorScheduleService, DocumentsAttachmentService } from 'src/app/proxy/services';
import { MatDialog } from '@angular/material/dialog';
import { LiveConsultBookingDialogComponent } from '../live-consult-booking-dialog/live-consult-booking-dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-live-doctor-card',
  templateUrl: './live-doctor-card.component.html',
  styleUrls: ['./live-doctor-card.component.scss']
})
export class LiveDoctorCardComponent {
  isAuthUser: number;
  isLoading: boolean = false;
  userType: string = '';
  picUrls: any;
  @Input() doctorDetails: any
  defaultImage = "assets/doctor/dr.jpeg"
  public picUrl = `${environment.apis.default.url}/`;

  constructor(private DoctorScheduleService: DoctorScheduleService,
    private NormalAuth: AuthService,
    public dialog: MatDialog,
    private TosterService: TosterService,
    private DocumentsAttachmentService: DocumentsAttachmentService

  ) {
    this.isAuthUser = this.NormalAuth.authInfo()?.id;
    this.userType = this.NormalAuth.authInfo()?.userType;
    //this.picUrls = this.picUrl + this.doctorDetails.profilePic;
  }

  onClickConsultNow(data: any) {
    this.openDialog(data)
  }


  openDialog(data: any): void {
    this.isLoading = true
    if (data.id) {
      //this.DoctorScheduleService.getDetailsScheduleListByDoctorId(
      // data.id
      //).subscribe((res) => {
      //this.isLoading = false
      //if (res?.length > 0 && data) {
      const dialogRef = this.dialog.open(LiveConsultBookingDialogComponent, {
        maxWidth: 600,
        minWidth: 450,
        data: {
          doctorDetails: data,
          //doctorScheduleInfo: res,
          isAuthUser: this.isAuthUser ? true : false,
          userAccess: this.userType == 'doctor' ? false : true
        },
      });
      dialogRef.afterClosed().subscribe((result) => { });
      //} else {
      //  this.TosterService.customToast(`No Details/Schedule found`,"warning")
      //}
      //});
    }
  }
}
