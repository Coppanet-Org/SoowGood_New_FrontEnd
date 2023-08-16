import { HospitalStateService } from './../../../../shared/services/hospital-state.service';
import { TosterService } from './../../../../shared/services/toster.service';
import { DoctorScheduleService } from './../../../../proxy/services/doctor-schedule.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DoctorChamberService } from 'src/app/proxy/services';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ScheduleDialogComponent } from '../schedule-dialog/schedule-dialog.component';
import { CommonService } from 'src/app/shared/services/common.service';
import { ConsultancyType, ScheduleType } from 'src/app/proxy/enums';
import { map } from 'rxjs';
import { scheduleData } from 'src/app/shared/utils/basic-info';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss'],
})
export class ScheduleFormComponent implements OnInit {
  @Input() openFormComponent!: boolean;
  @Output() rerenderDoctorSchedule: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  form!: FormGroup;
  doctorId: any;
  error!: boolean;
  hospitalOptions: any = [];
  DoctorScheduleDt = [];
  days: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  selectedDays: string[] = [];
  consultancyType: any = [];
  scheduleType: any = [];
  allSelectedSession: any = [];

  inputConfigs: any = [];
  editData!: any;
  editScheduleId!: number;

  constructor(
    private fb: FormBuilder,
    private DoctorChamberService: DoctorChamberService,
    private DoctorScheduleService: DoctorScheduleService,
    private HospitalStateService: HospitalStateService,
    private normalAuth: AuthService,
    private TosterService: TosterService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.consultancyType = CommonService.getEnumList(ConsultancyType);
    this.scheduleType = CommonService.getEnumList(ScheduleType);
    this.loadForm();
    let authInfo = this.normalAuth.authInfo();
    if (authInfo && authInfo.id) {
      this.doctorId = authInfo.id;
      this.HospitalStateService.getData()
        .pipe(
          map((list) => {
            return list.map((item: any) => ({
              name: item.chamberName,
              id: item.id,
            }));
          })
        )
        .subscribe((hospitalList) => {
          this.inputConfigs = scheduleData(
            this.consultancyType,            
            this.scheduleType,
            hospitalList,
            
          );
        });
    }
    this.HospitalStateService.getIndividualScheduleInfo().subscribe((res) => {
      this.form.patchValue(res);
      this.allSelectedSession = res.doctorScheduleDaySession;
    });
    //refactor and optimize further 
    this.HospitalStateService.getHospitalScheduleFormEvent().subscribe(
      (res) => {
        this.form.reset();
        this.allSelectedSession = [];
      }
    );
    this.HospitalStateService.getIndividualScheduleInfoForEdit().subscribe((res) => {
      if (res.edit && res.id) {
        this.editData = true;
        this.editScheduleId = res.id;
      } else {
        this.editData = false
      }
    });
  }

  loadForm() {
    this.form = this.fb.group({
      scheduleType: [0, Validators.required],
      consultancyType: [0, Validators.required],
      doctorChamberId: [0, Validators.required],
    });
  }

  toggleDaySelection(day: string) {
    this.openDialog(day);
  }

  submit() {
    if (!this.form.valid) {
      this.TosterService.customToast(
        'Please field all required field',
        'warning'
      );
      return;
    }
    const obj = {
      doctorProfileId: this.doctorId,
      scheduleType: Number(this.form.value.scheduleType),
      consultancyType: Number(this.form.value.consultancyType),
      doctorChamberId: Number(this.form.value.doctorChamberId),
      isActive: true,
      offDayFrom: '2023-08-13T08:27:02.691Z',
      offDayTo: '2023-08-13T08:27:02.691Z',
      doctorScheduleDaySession: this.allSelectedSession.map((e: any) => {
        return {
          id: (typeof e.id === 'string' || e.id instanceof String) ? 0:e.id,
          scheduleDayofWeek: e.scheduleDayofWeek,
          startTime: e.startTime,
          endTime: e.endTime,
          noOfPatients: e.noOfPatients,
          isActive: true,
        };
      }),
      doctorFeesSetup: [],
    };


    if (!this.editScheduleId) {

      this.DoctorScheduleService.create(obj).subscribe((res) => {
        if (res.success == true) {
          this.TosterService.customToast(String(res.message), 'success');
          this.allSelectedSession = [];
          this.form.reset();
          this.HospitalStateService.setHospitalScheduleFormEvent(false);
          this.rerenderDoctorSchedule.emit(true);
        } else if (res.success == false) {
          this.TosterService.customToast(String(res.message), 'error');
        } else {
          this.TosterService.customToast(String(res.message), 'warning');
        }
      });
    } else {
      this.DoctorScheduleService.update({ ...obj, id: this.editScheduleId }).subscribe((res) =>
        this.rerenderDoctorSchedule.emit(true)
      )
    }

  }
  getDaySessions(day: string) {
    return this.allSelectedSession.filter(
      (s: any) => s.scheduleDayofWeek === day
    );
  }

  openDialog(day: string) {
    const dialogRef = this.dialog.open(ScheduleDialogComponent, {
      data: { selectedDay: day, title: 'Select Your Session Time' }, // Pass any data you need to the dialog
    });

    dialogRef.afterClosed().subscribe((result) => {
      result?.appointments.map(
        (e: any) => (this.allSelectedSession = [...this.allSelectedSession, e])
      );
    });
  }

  onSessionRemove(id: any) {
    this.DoctorScheduleService.deleteSession(id).subscribe(
      (res) =>
      (this.allSelectedSession = this.allSelectedSession.filter(
        (f: any) => f.id !== id
      ))
    );
  }
}
