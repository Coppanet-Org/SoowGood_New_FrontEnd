import { AuthService } from './../../../../shared/services/auth.service';
import { DoctorScheduleService } from './../../../../proxy/services/doctor-schedule.service';
import { HospitalStateService } from './../../../../shared/services/hospital-state.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DoctorChamberDto, DoctorScheduleDto } from 'src/app/proxy/dto-models';
// import { ScheduleDialogComponent } from '../schedule-dialog/schedule-dialog.component';
// import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-schedule-info',
  templateUrl: './schedule-info.component.html',
  styleUrls: ['./schedule-info.component.scss'],
})
export class ScheduleInfoComponent implements OnInit {
  scheduleList: DoctorScheduleDto[] = [];
  doctorId: any;
  openFormComponent!: boolean;
  scheduleValue!: DoctorScheduleDto;

  constructor(
    public dialog: MatDialog,
    // private HospitalStateService :HospitalStateService
    private DoctorScheduleService: DoctorScheduleService,
    private NormalAuth: AuthService,
    private HospitalStateService: HospitalStateService
  ) {}

  ngOnInit(): void {
    let authInfo = this.NormalAuth.authInfo();
    if (authInfo && authInfo.id) {
      this.doctorId = authInfo.id;
      this.getScheduleList(authInfo.id);
    }
    this.getScheduleFormEventStatus();
  }

  getScheduleList(id: number): void {
    this.DoctorScheduleService.getListByDoctorIdList(id).subscribe((res) => {
      this.scheduleList = res;
    });
  }

  getScheduleFormEventStatus() {
    this.HospitalStateService.getHospitalScheduleFormEvent().subscribe(
      (res: boolean) => (this.openFormComponent = res)
    );
  }

  openForm(): void {
    this.HospitalStateService.setHospitalScheduleFormEvent(
      !this.openFormComponent
    );
  }

  onViewDetails(id: any): void {
    this.HospitalStateService.setHospitalScheduleFormEvent(true);
    this.DoctorScheduleService.get(id).subscribe((res) =>
      this.HospitalStateService.setIndividualScheduleInfo(res)
    );
  }
}
