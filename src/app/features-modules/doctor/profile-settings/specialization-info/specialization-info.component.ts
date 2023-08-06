import { DoctorProfileService } from '../../../../proxy/services/doctor-profile.service';
import {
  DoctorChamberDto,
  DoctorSpecializationDto,
} from '../../../../proxy/dto-models/models';
import { Component, Input, OnInit } from '@angular/core';
import { SpecializationDto } from 'src/app/proxy/dto-models';
import {
  DoctorSpecializationService,
  SpecialityService,
  SpecializationService,
} from 'src/app/proxy/services';
import { AuthService } from 'src/app/shared/services/auth.service';

import { MatDialog } from '@angular/material/dialog';
import { SpecializationDialogComponent } from '../specialization-dialog/specialization-dialog.component';

@Component({
  selector: 'app-specialization-info',
  templateUrl: './specialization-info.component.html',
  styleUrls: ['./specialization-info.component.scss'],
})
export class SpecializationInfoComponent implements OnInit {
  allSpecializations!: DoctorSpecializationDto[];
  specialityName: any = '';
  specializationName: any = '';
  specialityId: any = '';
  constructor(
    public dialog: MatDialog,
    private doctorSpecializationService: DoctorSpecializationService,
    private doctorSpeciality: SpecialityService,
    private specializationService: SpecializationService,
    private normalAuth: AuthService,
    private doctorProfileService: DoctorProfileService
  ) {}

  ngOnInit(): void {
    let authId = this.normalAuth.authInfo().id;
    if (authId) {
      this.doctorProfileService.get(authId).subscribe((res) => {
        if (res.specialityId) {
          this.specialityId = res.specialityId;
          this.doctorSpeciality
            .get(res.specialityId)
            .subscribe((res) => (this.specialityName = res.specialityName));
        }
        this.getSpecializations(res.specialityId);
      });
    }

    this.doctorSpecializationService
      .getList()
      .subscribe((res) => (this.allSpecializations = res));
  }

  getSpecializations(id: any): void {
    this.specializationService
      .getBySpecialityId(id)
      .subscribe((res) => (this.specializationName = res.specializationName));
  }

  // getProfilePic() {
  //   this.subs.sink = this.doctorProfilePicService
  //     .getDocumentInfoByEntityTypeAndEntityIdAndAttachmentType(
  //       'Doctor',
  //       this.profileInfo.id,
  //       'ProfilePicture'
  //     )
  //     .subscribe((at) => {
  //       if (at) {
  //         let prePaths: string = '';
  //         var re = /wwwroot/gi;
  //         prePaths = at.path ? at.path : '';
  //         this.profilePic = prePaths.replace(re, '');
  //         this.url = this.picUrl + this.profilePic;
  //       }
  //     });
  // }


  

  openDialog(): void {
    const dialogRef = this.dialog.open(SpecializationDialogComponent, {
      width: '40vw',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
  handleSpecializationEdit(row: any) {
    this.dialog
      .open(SpecializationDialogComponent, {
        data: row,
        width: "40vw",
      })
      .afterClosed()
      .subscribe((result) => {
        if (result === true) {
          // this.getDegreeDataList(this.doctorId);
        }
      });
  }

}
