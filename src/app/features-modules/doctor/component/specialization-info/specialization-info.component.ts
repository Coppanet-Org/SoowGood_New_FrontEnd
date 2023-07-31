import { DoctorProfileService } from './../../../../proxy/services/doctor-profile.service';
import { DoctorChamberDto } from './../../../../proxy/dto-models/models';
import { Component, Input, OnInit } from '@angular/core';
import { SpecializationDto } from 'src/app/proxy/dto-models';
import { SpecializationService } from 'src/app/proxy/services';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SpecializationDialogComponent } from '../specialization-dialog/specialization-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-specialization-info',
  templateUrl: './specialization-info.component.html',
  styleUrls: ['./specialization-info.component.scss'],
})
export class SpecializationInfoComponent implements OnInit {
  specializationList: any = [];

  constructor(
    private specializationService: SpecializationService,
    private doctorProfileService: DoctorProfileService,
    private normalAuth: AuthService,
    public dialog: MatDialog,
  ) {}

  openDialog():void {
    const dialogRef = this.dialog.open(SpecializationDialogComponent,{
      width: "40vw"
    });
  
    dialogRef.afterClosed().subscribe(result => {
      
    });
  
  }

  ngOnInit(): void {
    let authId = this.normalAuth.authInfo().id;

    if (authId) {
      this.doctorProfileService.get(authId).subscribe((res) => {
        if (res.specialityId) {
          this.specializationService.getBySpecialityId(res.specialityId).subscribe((list)=>    console.log(list))
       
          
        }
      });
    }
  }
}
