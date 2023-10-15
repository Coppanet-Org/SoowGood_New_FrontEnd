import { PatientProfileService } from 'src/app/proxy/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss'],
})
export class PatientDetailsComponent implements OnInit {
  patientProfileInfo: any;

  constructor(
    private route: ActivatedRoute,
    private PatientProfileService: PatientProfileService
  ) {}

  ngOnInit(): void {
    const { patientProfileId } = this.route.snapshot.params;
    if (patientProfileId) {
      this.PatientProfileService.get(patientProfileId).subscribe((res) => {
        this.patientProfileInfo = res;
        console.log(res);
        
      });
    }
  }
}
