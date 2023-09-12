import { DoctorProfileService } from './../../../proxy/services/doctor-profile.service';
import { Component, OnInit } from '@angular/core';
import { UserinfoStateService } from '../../services/states/userinfo-state.service';
import { AuthService } from '../../services/auth.service';
import { DoctorProfileDto } from 'src/app/proxy/dto-models';

@Component({
  selector: 'app-public-doctors',
  templateUrl: './public-doctors.component.html',
  styleUrls: ['./public-doctors.component.scss'],
})
export class PublicDoctorsComponent implements OnInit {
  doctorList: DoctorProfileDto[] = [];
  constructor(
    private UserinfoStateService: UserinfoStateService,
    private NormalAuth: AuthService,
    private DoctorProfileService: DoctorProfileService
  ) {}

  ngOnInit(): void {
    let id = this.NormalAuth.authInfo().id;
    if (id) {
      this.UserinfoStateService.getUserPatientInfo(id, 'patient');
      this.DoctorProfileService.getList().subscribe(
        (e) => (this.doctorList = e)
      );
    }
  }
}
