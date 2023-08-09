import { DoctorProfileService } from '../../../../proxy/services/doctor-profile.service';
import {
  DoctorChamberDto,
  DoctorSpecializationDto,
} from '../../../../proxy/dto-models/models';
import { Component, Input, OnInit } from '@angular/core';
import { SpecializationDto } from 'src/app/proxy/dto-models';
import {
  DoctorSpecializationService,
  DocumentsAttachmentService,
  SpecialityService,
  SpecializationService,
} from 'src/app/proxy/services';
import { AuthService } from 'src/app/shared/services/auth.service';

import { MatDialog } from '@angular/material/dialog';
import { SpecializationDialogComponent } from '../specialization-dialog/specialization-dialog.component';
import { Observable, combineLatest, forkJoin } from 'rxjs';

@Component({
  selector: 'app-specialization-info',
  templateUrl: './specialization-info.component.html',
  styleUrls: ['./specialization-info.component.scss'],
})
export class SpecializationInfoComponent implements OnInit {
  allSpecializations: DoctorSpecializationDto[] =[];
  specialityName: any = '';
  specializationName: any = '';
  specialityId: any = '';
  doctorId: any;
 
  constructor(
    public dialog: MatDialog,
    private doctorSpecializationService: DoctorSpecializationService,
    private doctorSpeciality: SpecialityService,
    private specializationService: SpecializationService,
    private normalAuth: AuthService,
    private doctorProfileService: DoctorProfileService,
    private doctorDocService : DocumentsAttachmentService
  ) {}

  ngOnInit(): void {
    let authId = this.normalAuth.authInfo().id;
    if (authId) {
      this.doctorId = authId;
      this.doctorProfileService.get(authId).subscribe((res) => {
        if (res.specialityId) {
          this.specialityId = res.specialityId;
          this.doctorSpeciality
            .get(res.specialityId)
            .subscribe((res) => (this.specialityName = res.specialityName));
        }
        this.getSpecializations(res.specialityId);
      });
      this.combineObservables(authId)
  }
  }



  combineObservables(id: any): void {
    const doctorSpecialization$ = this.doctorSpecializationService.getDoctorSpecializationListByDoctorId(id);
    const profilePic$ = this.doctorDocService.getDocumentInfoByEntityTypeAndEntityIdAndAttachmentType(
      'Doctor',
      this.doctorId,
      'DoctorSpecialityDoc'
    );
  
    forkJoin([doctorSpecialization$, profilePic$]).subscribe(([specializations, at]) => {
      const mergedResult = [...specializations, at];
   this.allSpecializations = specializations

  
      // if (at) {
      //   let prePaths: string = '';
      //   var re = /wwwroot/gi;
      //   prePaths = at.path ? at.path : '';
      //   this.profilePic = prePaths.replace(re, '');
      //   this.url = this.picUrl + this.profilePic;
      // }
    });
  }






  getDoctorSpecializationList(id:any):void {
    this.doctorSpecializationService
      .getDoctorSpecializationListByDoctorId(id)
      .subscribe((res) =>  this.allSpecializations = res
      );
    }
    
  //   getProfilePic() {
  //  this.doctorDocService
  //     .getDocumentInfoByEntityTypeAndEntityIdAndAttachmentType(
  //       'Doctor',
  //       this.doctorId,
  //       'ProfilePicture'
  //       )
  //       .subscribe((at) => {
  //           if (at) {
  //               let prePaths: string = '';
  //               var re = /wwwroot/gi;
  //               prePaths = at.path ? at.path : '';
  //               this.profilePic = prePaths.replace(re, '');
  //               this.url = this.picUrl + this.profilePic;
  //             }
  //           });
  //         }
          
          
          getSpecializations(id: any) {
            return this.specializationService
              .getBySpecialityId(id)
              .subscribe((res) => (this.specializationName = res.specializationName));
          }
          
          
  openDialog(): void {
    const dialogRef = this.dialog.open(SpecializationDialogComponent, {
      width: '40vw',
    });
    
    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this.getDoctorSpecializationList(this.doctorId);
      }
    });
  }
  handleSpecializationEdit(row: any) {
    this.dialog
      .open(SpecializationDialogComponent, {
        data: row,
        width: '40vw',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result == true) {
          this.getDoctorSpecializationList(this.doctorId);
        }
      });
  }
}
