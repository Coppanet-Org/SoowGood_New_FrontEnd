import { PatientProfileService } from './../../../proxy/services/patient-profile.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/proxy/services';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { CreatePatientComponent } from '../create-patient/create-patient.component';
import { UserinfoStateService } from '../../services/states/userinfo-state.service';
import { map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-public-patients',
  templateUrl: './public-patients.component.html',
  styleUrls: ['./public-patients.component.scss'],
})
export class PublicPatientsComponent implements OnInit {
  patientList!: any[];
  patientLoader: boolean = false;
  userInfo: any;
  constructor(
    private Router: Router,
    private AppointmentService: AppointmentService,
    private NormalAuth: AuthService,
    public dialog: MatDialog,
    private PatientProfileService: PatientProfileService,
    private UserinfoStateService: UserinfoStateService
  ) { }
  ngOnInit(): void {
    let user = this.NormalAuth.authInfo();
    if (user.userType === 'patient') {
    this.UserinfoStateService.getUserPatientInfo(user.id, 'patient');
    }
    else if (user.userType === 'agent') {
      this.UserinfoStateService.getUserPatientInfo(user.id, 'agent');
    }
    this.userInfo = user;
    // const { aptId } = this.route.snapshot.params;
    if (user.id) {
      this.patientLoader = true;
      try {
        if (user.userType === 'doctor') {
          this.AppointmentService.getPatientListByDoctorId(user.id).subscribe(
            (res) => {
              this.patientList = res;
              this.patientLoader = false;
            }
          );
        }
        else if (user.userType === 'patient' || user.userType === 'agent') {

          this.UserinfoStateService.getData()
            .pipe(switchMap((e) => {
                if (e) {
                  return this.UserinfoStateService.getUserPatientData().pipe(
                    map((data) => {
                      return data
                    })
                  );
                } else {
                  return of([]);
                }
              })
            )
            .subscribe((res) => {
              this.patientList = res;
              console.log(res);

            });
        }
        else if (user.userType === 'agent') {
          console.log('Data Nai');
        }
      } catch (error) {
        console.log(error);
        this.patientLoader = false;
      }
    }
  }

  goToPatientProfile(patient: any) {
    if (this.userInfo.userType === 'doctor') {
      this.Router.navigate([
        '/doctor/patients/patient-details/',
        patient.patientProfileId
      ]);
    }
    else if (this.userInfo.userType === 'patient') {
      this.Router.navigate([
        '/patient/my-patient/patient-details/',
        patient.id
      ]);
    } else if (this.userInfo.userType === 'agent') {
      // for agent 
    } return
  }

  addNewPatient(role: string) {
    const dialogRef = this.dialog.open(CreatePatientComponent, {
      width: '40vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.getDegreeDataList(this.doctorId)
    });
  }

  onSearchChange(e: any) {


  }
}
