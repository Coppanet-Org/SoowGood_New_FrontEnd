import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/proxy/services';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-public-patients',
  templateUrl: './public-patients.component.html',
  styleUrls: ['./public-patients.component.scss']
})
export class PublicPatientsComponent implements OnInit {
  patientList!:any[];
  patientLoader:boolean =false
constructor(private Router: Router,private AppointmentService : AppointmentService, private NormalAuth :AuthService){

}
  ngOnInit(): void {
    let id = this.NormalAuth.authInfo().id;

        // const { aptId } = this.route.snapshot.params;
        if (id) {
          this.patientLoader = true
          try {
            this.AppointmentService.getPatientListByDoctorId(id).subscribe((res)=>{
             this.patientList = res
             this.patientLoader = false
            })
          } catch (error) {
            console.log(error);
            this.patientLoader = false
          }
        }
  }
  goToPatientProfile(patient:any) {
    this.Router.navigate(['/doctor/patients/patient-details/', patient.patientProfileId, patient.doctorProfileId]);
  }

}
