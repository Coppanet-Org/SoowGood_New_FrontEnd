import { DoctorProfileService } from './../../../../proxy/services/doctor-profile.service';
import {
  DoctorChamberDto,
  DoctorSpecializationDto,
} from './../../../../proxy/dto-models/models';
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
  constructor(
    public dialog: MatDialog,
    private doctorSpecializationService: DoctorSpecializationService,
    private doctorSpeciality: SpecialityService,
    private SpecializationService: SpecializationService,
    private normalAuth: AuthService
  ) {}

  ngOnInit(): void {
//     let authId = this.normalAuth.authInfo().id;
//     // this.doctorId = authId;
// console.log(authId);

//     if (authId) {
//       this.doctorSpeciality.get(authId).subscribe((res) => {
//         if (res) {
//           console.log(res);
          
//           // this.SpecializationService.getListBySpecialtyId(res.specialityId).subscribe((list) => (this.specializationList = list));
//         }
//       });
//     }

    this.doctorSpecializationService
      .getList()
      .subscribe((res) => (this.allSpecializations = res));
  }

  getSpecializations(): void {}
  openDialog(): void {
    const dialogRef = this.dialog.open(SpecializationDialogComponent, {
      width: '40vw',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
