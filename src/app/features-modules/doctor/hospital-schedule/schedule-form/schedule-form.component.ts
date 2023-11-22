import { HospitalStateService } from '../../../../shared/services/states/hospital-state.service';
import { TosterService } from './../../../../shared/services/toster.service';
import { DoctorScheduleService } from './../../../../proxy/services/doctor-schedule.service';
// import { DoctorScheduleDto } from './../../../../proxy/dto-models/models';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { DoctorChamberService } from 'src/app/proxy/services';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ScheduleDialogComponent } from '../schedule-dialog/schedule-dialog.component';
import { CommonService } from 'src/app/shared/services/common.service';
import {
  // AppointmentType,
  ConsultancyType,
  ScheduleType,
} from 'src/app/proxy/enums';
// import { DoctorScheduleDaySessionDto } from 'src/app/proxy/dto-models';
import { map } from 'rxjs';
// import { scheduleData } from 'src/app/shared/utils/input-info';

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
  hideField!: boolean;
  selectedDays: string[] = [];
  consultancyType: any = [];
  scheduleType: any = [];
  allSelectedSession: any = [];
  isDisable: boolean = false;
  isRequired: boolean = false;
  inputConfigs: any = [];
  editData!: any;
  editScheduleId!: number;
  hospitalList: any;
  formSubmitted:boolean = false
  slotError:boolean = false
  constructor(
    private fb: FormBuilder,
    private DoctorChamberService: DoctorChamberService,
    private DoctorScheduleService: DoctorScheduleService,
    private HospitalStateService: HospitalStateService,
    private normalAuth: AuthService,
    private TosterService: TosterService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
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
          this.hospitalList = hospitalList
          // this.getInputFieldData()
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
    this.HospitalStateService.getIndividualScheduleInfoForEdit().subscribe(
      (res) => {
        if (res.edit && res.id) {
          this.editData = true;
          this.editScheduleId = res.id;
        } else {
          this.editData = false;
          this.editScheduleId = 0;
        }
      }
    );

    this.form.get('consultancyType')?.valueChanges.subscribe((value) => {
      if (value == 2 || value == 3) {
        this.isDisable = true;
      } else {
        this.isDisable = false;
      }
    });
  }

  // getInputFieldData() {
  //   this.inputConfigs = scheduleData(
  //     this.hospitalList,
  //     this.scheduleType,
  //     this.consultancyType
  //   );
  // }

  loadForm() {
    this.form = this.fb.group({
      scheduleType: ['', Validators.required],
      consultancyType: ['',Validators.required],
      doctorChamberId: [null, Validators.required],
      isSlotSelected : ['',Validators.required]
    });
  }

  toggleDaySelection(day: string) {
    this.openDialog(day);
  }

  submit() {
this.formSubmitted = true
    if (this.form.invalid) {
      this.TosterService.customToast(
        'Please field all required field',
        'warning'
      );
      return;
    }

    


    //if (!this.form.valid) {
    //  this.TosterService.customToast(
    //    'Please field all required field',
    //    'warning'
    //  );
    //  return;
    //}
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
          id: typeof e.id === 'string' || e.id instanceof String ? 0 : e.id,
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
      this.DoctorScheduleService.update({
        ...obj,
        id: this.editScheduleId,
      }).subscribe((res) => {
        this.TosterService.customToast(String(res.message), 'success')
        this.rerenderDoctorSchedule.emit(true)
      }

      );
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
      this.form.get('isSlotSelected')?.setValue(true)
      result?.appointments.map(
        (e: any) => (this.allSelectedSession = [...this.allSelectedSession, e])
      );
    });
  }

  //should be refactor
  onSessionRemove(id: any) {
    this.DoctorScheduleService.deleteSession(id).subscribe((res) =>
{      (this.allSelectedSession = this.allSelectedSession.filter(
        (f: any) => f.id !== id
      ))},(error)=>{
        console.log(error.message);
      }
    );
  }


}
