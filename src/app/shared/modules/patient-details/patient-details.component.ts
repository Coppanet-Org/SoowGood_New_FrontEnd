import { PrescriptionMasterService } from './../../../proxy/services/prescription-master.service';
import { PatientProfileService } from 'src/app/proxy/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrescriptionMasterDto } from 'src/app/proxy/dto-models';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss'],
})
export class PatientDetailsComponent implements OnInit {
  patientProfileInfo: any;
  prescriptionListDetails!: PrescriptionMasterDto[];
  userInfo: any;

  constructor(
    private route: ActivatedRoute,
    private PatientProfileService: PatientProfileService,
    private PrescriptionMasterService: PrescriptionMasterService,
    private NormalAuth: AuthService
  ) {}

  ngOnInit(): void {
    let user = this.NormalAuth.authInfo();
    this.userInfo = user;
    //   this.route.queryParams.subscribe(params => {
    //     const patientProfileId = params['patientProfileId'];
    //     const doctorProfileId = params['doctorProfileId'];
    // console.log(patientProfileId,doctorProfileId);

    //     // Now you can use patientProfileId and doctorProfileId as needed.
    //   });

    const { patientProfileId } = this.route.snapshot.params;
    if (this.userInfo.userType === 'doctor') {
      if (patientProfileId && user.id) {
        this.PatientProfileService.get(patientProfileId).subscribe((res) => {
          this.patientProfileInfo = res;
        });
        this.PrescriptionMasterService.getPrescriptionMasterListByDoctorIdPatientId(
          user.id,
          patientProfileId
        ).subscribe((res) => {
          this.prescriptionListDetails = res;
        });
      }
    } else if (this.userInfo.userType === 'patient') {
      this.PatientProfileService.get(patientProfileId).subscribe((res) => {
        this.patientProfileInfo = res;
      });
      this.PrescriptionMasterService.getPrescriptionMasterListByPatientId(
        patientProfileId
      ).subscribe((res) => {
        this.prescriptionListDetails = res;
        console.log(res);
      });
    } else if (this.userInfo.userType === 'agent') {
      // this.PatientProfileService.get(patientProfileId).subscribe((res) => {
      //   this.patientProfileInfo = res;
      // });
      // this.PrescriptionMasterService.getPrescriptionMasterListByPatientId(patientProfileId).subscribe((res)=>{
      //   this.prescriptionListDetails = res
      // })
    }
    return;
  }
}
