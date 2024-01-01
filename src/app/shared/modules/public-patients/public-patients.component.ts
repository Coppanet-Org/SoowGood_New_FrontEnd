import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/proxy/services';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { CreatePatientComponent } from '../create-patient/create-patient.component';

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

  ) {}
  ngOnInit(): void {
    let user = this.NormalAuth.authInfo();
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
        } else if (user.userType === 'agent') {
          console.log('Data Nai');
        }
      } catch (error) {
        console.log(error);
        this.patientLoader = false;
      }
    }
  }
  goToPatientProfile(patient: any) {
    this.Router.navigate([
      '/doctor/patients/patient-details/',
      patient.patientProfileId,
      patient.doctorProfileId,
    ]);
  }
  addNewPatient(role: string) {
    const dialogRef = this.dialog.open(CreatePatientComponent, {
      width: '40vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.getDegreeDataList(this.doctorId)
    });
  }
}
