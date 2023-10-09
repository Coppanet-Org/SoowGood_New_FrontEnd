import { DoctorStateService } from './../../services/states/doctors-states/doctor-state.service';
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
    private DoctorStateService: DoctorStateService
  ) {}

  ngOnInit(): void {
    let id = this.NormalAuth.authInfo().id;
    if (id) {
      this.UserinfoStateService.getUserPatientInfo(id, 'patient');
      if (this.DoctorStateService.doctorsList.value.length <= 0) {
        this.DoctorStateService.getAllDoctorList().subscribe(
          (res) => {(this.doctorList = res) }
        );
      } else {
        this.DoctorStateService.getDoctorListData().subscribe(
          (res) => {(this.doctorList = res)}
        );
      }
    }
  }
}
