import { PrescriptionMasterService } from './../../../proxy/services/prescription-master.service';
import { PatientProfileService } from 'src/app/proxy/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrescriptionMasterDto } from 'src/app/proxy/dto-models';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss'],
})
export class PatientDetailsComponent implements OnInit {
  patientProfileInfo: any;
  prescriptionListDetails!: PrescriptionMasterDto[];

  constructor(
    private route: ActivatedRoute,
    private PatientProfileService: PatientProfileService,
    private PrescriptionMasterService :PrescriptionMasterService
  ) {}

  ngOnInit(): void {

  //   this.route.queryParams.subscribe(params => {
  //     const patientProfileId = params['patientProfileId'];
  //     const doctorProfileId = params['doctorProfileId'];
  // console.log(patientProfileId,doctorProfileId);
  
  //     // Now you can use patientProfileId and doctorProfileId as needed.
  //   });

    const { patientProfileId,doctorProfileId } = this.route.snapshot.params;
    console.log(this.route.snapshot.params);
    
    if (patientProfileId && doctorProfileId) {
      this.PatientProfileService.get(patientProfileId).subscribe((res) => {
        this.patientProfileInfo = res;
      });
      this.PrescriptionMasterService.getPrescriptionMasterListByDoctorIdPatientId(doctorProfileId,patientProfileId).subscribe((res)=>{
        this.prescriptionListDetails = res
      })
    }

  }
}
