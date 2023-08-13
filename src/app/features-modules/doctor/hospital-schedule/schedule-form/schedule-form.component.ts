import { DoctorScheduleService } from './../../../../proxy/services/doctor-schedule.service';
import { DoctorScheduleDto } from './../../../../proxy/dto-models/models';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { DoctorChamberService } from 'src/app/proxy/services';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import { ScheduleDialogComponent } from '../schedule-dialog/schedule-dialog.component';
import { CommonService } from 'src/app/shared/services/common.service';
import { AppointmentType, ConsultancyType } from 'src/app/proxy/enums';
import { DoctorScheduleDaySessionDto } from 'src/app/proxy/dto-models';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss'],
})
export class ScheduleFormComponent implements OnInit {
  form!: FormGroup;
  doctorId: any;
  error!: boolean;
  hospitalOptions: any = [
    {
      name: 'Dhaka Medical',
      id: '',
    },
  ];
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
  appointmentType: any = [];
  allSelectedSession: any = [];

  inputConfigs: any = [];

  constructor(
    private fb: FormBuilder,
    private DoctorChamberService: DoctorChamberService,
    private DoctorScheduleService: DoctorScheduleService,
    private normalAuth: AuthService,
    private tosterService: TosterService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadForm();
    let authInfo = this.normalAuth.authInfo();
    if (authInfo && authInfo.id) {
      this.doctorId = authInfo.id;
    }
    this.consultancyType = CommonService.getEnumList(ConsultancyType);
    this.appointmentType = CommonService.getEnumList(AppointmentType);
    this.inputConfigs = [
      {
        label: 'Select Hospital',
        inputId: 'Hospital',
        defaultOption: 'Select Hospital',
        options: this.hospitalOptions,
        formControlName: 'hospital',
        isSelect: true,
      },
      {
        label: 'Select appointment type',
        inputId: 'appointmentType',
        defaultOption: 'Select appointment type',
        options: this.appointmentType,
        formControlName: 'appointmentType',
        isSelect: true,
      },
      {
        label: 'Select Consultancy Type',
        inputId: 'consultancyType',
        defaultOption: 'Select Consultancy Type',
        options: this.consultancyType,
        formControlName: 'consultancyType',
        isSelect: true,
      },
    ];
  }

  loadForm() {
    this.form = this.fb.group({
      // doctorId: [this.doctorId, Validators.required],
      appointmentType: [2, Validators.required],
      consultancyType: [2, Validators.required],
      hospital: [2, Validators.required],
    });
  }

  toggleDaySelection(day: string) {
    this.openDialog(day);
  }

  submit() {
    const obj = {
      doctorProfileId: this.doctorId,
      scheduleType: this.form.value.appointmentType,
      consultancyType:this.form.value.consultancyType,
      doctorChamberId: this.form.value.hospital,
      isActive: true,
      offDayFrom: '2023-08-13T08:27:02.691Z',
      offDayTo: '2023-08-13T08:27:02.691Z',
      doctorScheduleDaySessions: this.allSelectedSession.map((e: any) => {
        return {
          scheduleDayofWeek: e.scheduleDayofWeek,
          startTime: e.startTime,
          endTime: e.endTime,
          noOfPatients: e.noOfPatients,
          isActive: true,
        };
      }),
      doctorFeesSetup: [],
    };

    console.log(obj);
    this.DoctorScheduleService.create(obj).subscribe((res) => console.log(res));
  }

  getDaySessions(day: string) {
    return this.allSelectedSession.filter((s: any) => s.day === day);
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

  onSessionRemove(id: string) {
    this.allSelectedSession = this.allSelectedSession.filter(
      (f: any) => f.id !== id
    );
  }
}
